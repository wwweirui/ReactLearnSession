# <Activity> 详解

官方定义：<Activity> lets you hide and restore the UI and internal state of its children.
<Activity> 让你可以隐藏和恢复其子元素的UI和内部状态。

使用案例：
```jsx
<Activity mode={visibility}>
  <MyComponent />
</Activity>
```

## 参考

### Activity

使用Activity隐藏应用
```jsx

<Activity mode={isShowingSidebar ? "visible" : "hidden"}>
  <Sidebar />
</Activity>

```

When an Activity boundary is hidden, React will visually hide its children using the display: "none" CSS property. It will also destroy their Effects, cleaning up any active subscriptions.
当Activity边界隐藏时，React将使用display: "none" CSS属性来视觉上隐藏其子元素。它还将销毁它们的副作用，清理任何激活的订阅。

**使用disply: "none" 属性隐藏，销毁子组件的副作用和一切激活的订阅**

While hidden, children still re-render in response to new props, albeit at a lower priority than the rest of the content.
在隐藏状态下，即使新的props发生变化，子组件也会以较低的优先级重新渲染。

**隐藏状态下渲染优先级更低**

When the boundary becomes visible again, React will reveal the children with their previous state restored, and re-create their Effects.
当边界再次变得可见时，React将使用之前的状态恢复子元素，并重新创建它们的副作用。

In this way, Activity can be thought of as a mechanism for rendering “background activity”. Rather than completely discarding content that’s likely to become visible again, you can use Activity to maintain and restore that content’s UI and internal state, while ensuring that your hidden content has no unwanted side effects.
通过这种方式，Activity可以被视为渲染“后台活动”的机制。而不是完全丢弃可能再次变得可见的内容，你可以使用Activity来维护和恢复该内容的UI和内部状态，同时确保你的隐藏内容没有任何不必要的副作用。
**隐藏状态下的子组件的UI和内部状态会被保留，并且重新创建它们的副作用**


Props： 

- children: The UI you intend to show and hide.
子组件：你要显示和隐藏的UI。

- mode: A string value of either 'visible' or 'hidden'. If omitted, defaults to 'visible'.
模式：一个字符串值，要么是'visible'，要么是'hidden'。如果省略，则默认为'visible'。

Caveats：注意事项 

If an Activity is rendered inside of a ViewTransition, and it becomes visible as a result of an update caused by startTransition, it will activate the ViewTransition’s enter animation. If it becomes hidden, it will activate its exit animation.
如果Activity在ViewTransition中渲染，并且由于startTransition引起的更新导致它变得可见，它将激活ViewTransition的进入动画。如果它变得隐藏，它将激活其退出动画。

An Activity that just renders text will not render anything rather than rendering hidden text, because there’s no corresponding DOM element to apply visibility changes to. 
渲染文本的Activity不会渲染任何内容，而只是渲染隐藏的文本，因为没有相应的DOM元素可以应用可见性更改。

For example, <Activity mode="hidden"><ComponentThatJustReturnsText /></Activity> will not produce any output in the DOM for const ComponentThatJustReturnsText = () => "Hello, World!".
例如，<Activity mode="hidden"><ComponentThatJustReturnsText /></Activity>不会在DOM中为const ComponentThatJustReturnsText = () => "Hello, World!"生成任何输出。

## Usage

### Restoring the state of hidden components
恢复隐藏组件的状态

In React, when you want to conditionally show or hide a component, you typically mount or unmount it based on that condition:
在React中，当你想要根据条件显示或隐藏组件时，通常会根据条件挂载或卸载组件：

```jsx
{isVisible && <MyComponent />}
```

But unmounting a component destroys its internal state, which is not always what you want.
但是卸载组件会销毁其内部状态，这通常不是你想要的。

When you hide a component using an Activity boundary instead, React will “save” its state for later:
当你使用Activity边界而不是挂载或卸载组件来隐藏组件时，React将“保存”其状态以供稍后使用：

**隐藏组件，会保留组件状态**

```jsx
<Activity mode={isVisible ? "visible" : "hidden"}>
  <MyComponent />
</Activity>
```

This makes it possible to hide and then later restore components in the state they were previously in.
这使得隐藏组件后，稍后可以恢复它们之前的状态。

The following example has a sidebar with an expandable section. You can press “Overview” to reveal the three subitems below it. The main app area also has a button that hides and shows the sidebar.
下面的示例有一个可展开的侧边栏。你可以按“概述”来显示它下面的三个子项。主应用程序区域也有一个按钮，可以隐藏和显示侧边栏。

Try expanding the Overview section, and then toggling the sidebar closed then open:
展开概述部分，然后关闭然后打开侧边栏：

> 详情查看目录下code ex1

The Overview section always starts out collapsed. Because we unmount the sidebar when isShowingSidebar flips to false, all its internal state is lost.
概述部分总是折叠的。因为我们在isShowingSidebar翻转到false时卸载了侧边栏，所以所有的**内部状态都会丢失**。

This is a perfect use case for Activity. We can preserve the internal state of our sidebar, even when visually hiding it.
这是Activity的一个完美用例。我们可以在视觉上隐藏它时保留侧边栏的内部状态。

Let’s replace the conditional rendering of our sidebar with an Activity boundary:
让我们用Activity边界替换我们侧边栏的条件渲染：

> code 查看code目录下 ex2

Our sidebar’s internal state is now restored, without any changes to its implementation.
我们的侧边栏的内部状态现在被恢复，而没有对其实现进行任何更改。

### Restoring the DOM of hidden components
恢复隐藏组件的DOM

Since Activity boundaries hide their children using display: none, their children’s DOM is also preserved when hidden. 
由于Activity边界使用display: none来隐藏它们的子元素，所以当它们被隐藏时，它们的**子元素的DOM也会被保留**。

This makes them great for maintaining ephemeral state in parts of the UI that the user is likely to interact with again.
这使得它们对于在用户可能再次与之交互的UI的一部分中维护短暂状态非常有用。

In this example, the Contact tab has a <textarea> where the user can enter a message. 
在这个例子中，联系人标签有一个<textarea>，用户可以输入消息。

If you enter some text, change to the Home tab, then change back to the Contact tab, the draft message is lost:
如果你输入一些文本，然后切换到主页标签，然后再切换回联系人标签，草稿消息就会丢失：

This is because we’re fully unmounting Contact in App. 
这是因为我们完全卸载了App中的Contact。

When the Contact tab unmounts, the <textarea> element’s internal DOM state is lost.
当联系人标签卸载时，<textarea>元素的内部DOM状态也会丢失。

If we switch to using an Activity boundary to show and hide the active tab, we can preserve the state of each tab’s DOM. 
如果我们切换到使用Activity边界来显示和隐藏活动标签，我们可以保留每个标签的DOM状态。

Try entering text and switching tabs again, and you’ll see the draft message is no longer reset:
尝试再次输入文本并切换标签，你会看到草稿消息不再重置：

> 写到这里吐槽一下：
> vue真是养的太好了，v-show的功能，React19.2才开始支持...

Again, the Activity boundary let us preserve the Contact tab’s internal state without changing its implementation.
再次，Activity边界让我们在不改变其实现的情况下保留联系人标签的内部状态。

**保留内部状态**

### Pre-rendering content that’s likely to become visible
预渲染可能会变得可见的内容

So far, we’ve seen how Activity can hide some content that the user has interacted with, without discarding that content’s ephemeral state.
到目前为止，我们已经看到了Activity如何隐藏用户与内容的交互，而不会丢弃该内容的短暂状态。
> 学会了基本的使用方法

But Activity boundaries can also be used to prepare content that the user has yet to see for the first time:
但是Activity边界也可以用来准备用户首次看到的内容：

```jsx
<Activity mode="hidden">
  <SlowComponent />
</Activity>
```
When an Activity boundary is hidden during its initial render, its children won’t be visible on the page — but they will still be rendered, 
当Activity边界在初始渲染期间隐藏时，其子元素不会出现在页面上，但它们仍然会被渲染，

albeit at a lower priority than the visible content, and without mounting their Effects.
尽管它们的优先级低于可见内容，不会挂载它们的副作用。

This pre-rendering allows the children to load any code or data they need ahead of time, so that later, when the Activity boundary becomes visible, the children can appear faster with reduced loading times.
这允许子元素预先加载任何代码或数据，以便稍后，当Activity边界变得可见时，子元素可以更快地出现，减少加载时间。

Let’s look at an example.


In this demo, the Posts tab loads some data. If you press it, you’ll see a Suspense fallback displayed while the data is being fetched:
在这个演示中，Posts标签加载一些数据。如果你按下它，你会看到一个Suspense回退，数据正在被获取：

example code...

This is because App doesn’t mount Posts until its tab is active.
这是因为App不会在其标签处于活动状态之前挂载Posts。

If we update App to use an Activity boundary to show and hide the active tab, Posts will be pre-rendered when the app first loads, allowing it to fetch its data before it becomes visible.
如果我们更新App以使用Activity边界来显示和隐藏活动标签，App首次加载时，Posts将被预渲染，允许它在变得可见之前获取其数据。

Try clicking the Posts tab now:
现在点击Posts标签：

example code ...

Posts was able to prepare itself for a faster render, thanks to the hidden Activity boundary.
Posts通过隐藏的Activity边界获得了更快的渲染。

Pre-rendering components with hidden Activity boundaries is a powerful way to reduce loading times for parts of the UI that the user is likely to interact with next.
使用隐藏的Activity边界预渲染组件是一种减少用户可能与之交互的下一部分的加载时间的强大方法。

> Note
> Only Suspense-enabled data sources will be fetched during pre-rendering. They include:
只有启用了Suspense的数据源才会在预渲染期间获取数据。它们包括：

Data fetching with Suspense-enabled frameworks like Relay and Next.js
数据获取在启用了Suspense的框架如Relay和Next.js

Lazy-loading component code with lazy
懒加载组件代码的lazy

Reading the value of a cached Promise with use
读取缓存的Promise的值的use

Activity does not detect data that is fetched inside an Effect.
Activity不会检测Effect内部获取的数据。

The exact way you would load data in the Posts component above depends on your framework. If you use a Suspense-enabled framework, you’ll find the details in its data fetching documentation.
这个例子中Posts组件的数据加载方式取决于你的框架。如果使用了启用了Suspense的框架，你可以在其数据获取文档中找到详细信息。

Suspense-enabled data fetching without the use of an opinionated framework is not yet supported. 
启用了Suspense的数据获取，而不使用任何框架的支持目前还没有。

The requirements for implementing a Suspense-enabled data source are unstable and undocumented. An official API for integrating data sources with Suspense will be released in a future version of React.
实现启用了Suspense的数据来源的要求是不稳定和未记录的。React未来版本中将发布一个官方API，用于将数据来源与Suspense集成。

### Speeding up interactions during page load 
在页面加载期间加速交互

React includes an under-the-hood performance optimization called Selective Hydration. 
React包括一个名为Selective Hydration的内部性能优化。

It works by hydrating your app’s initial HTML in chunks, enabling some components to become interactive even if other components on the page haven’t loaded their code or data yet.
它通过在块中混合你的应用程序的初始HTML来工作，即使页面上的其他组件还没有加载它们的代码或数据，也可以使一些组件变得交互式。

Suspense boundaries participate in Selective Hydration, because they naturally divide your component tree into units that are independent from one another:
suspense边界参与Selective Hydration，因为它们自然地将组件树分成独立的单元：

```jsx
function Page() {
  return (
    <>
      <MessageComposer />
      <Suspense fallback="Loading chats...">
        <Chats />
      </Suspense>
    </>
  )
}

```

Here, MessageComposer can be fully hydrated during the initial render of the page, even before Chats is mounted and starts to fetch its data.
这里，MessageComposer可以在页面的初始渲染期间完全混合，即使Chats还没有挂载并开始获取其数据。

So by breaking up your component tree into discrete units, Suspense allows React to hydrate your app’s server-rendered HTML in chunks, enabling parts of your app to become interactive as fast as possible.
所以通过将组件树分解成离散的单元，Suspense允许React在块中混合你的应用程序的服务器渲染HTML，使应用程序的部分能够尽快变得交互式。

But what about pages that don’t use Suspense?
但是对于不使用Suspense的页面呢？

Take this tabs example:

```jsx
function Page() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <TabButton onClick={() => setActiveTab('home')}>
        Home
      </TabButton>
      <TabButton onClick={() => setActiveTab('video')}>
        Video
      </TabButton>

      {activeTab === 'home' && (
        <Home />
      )}
      {activeTab === 'video' && (
        <Video />
      )}
    </>
  )
}

```

Here, React must hydrate the entire page all at once. If Home or Video are slower to render, they could make the tab buttons feel unresponsive during hydration.
这里，React必须一次性混合整个页面。如果Home或Video渲染速度较慢，它们可能会在混合期间使标签按钮感觉不响应。

Adding Suspense around the active tab would solve this:
添加Suspense围绕活动标签可以解决这个问题：

```jsx
function Page() {
  const [activeTab, setActiveTab] = useState('home');

  return 
    <>
      <TabButton onClick={() => setActiveTab('home')}>
        Home
      </TabButton>
      <TabButton onClick={() => setActiveTab('video')}>
        Video
      </TabButton>

      <Suspense fallback={<Placeholder />}>
        {activeTab === 'home' && (
          <Home />
        )}
        {activeTab === 'video' && (
          <Video />
        )}
      </Suspense>
    </>
  )
}

```

…but it would also change the UI, since the Placeholder fallback would be displayed on the initial render.
但是它也会改变UI，因为占位符回退将在初始渲染期间显示。

Instead, we can use Activity. Since Activity boundaries show and hide their children, 
取而代之的是，我们可以使用Activity。由于Activity边界显示和隐藏它们的子元素，

they already naturally divide the component tree into independent units. And just like Suspense, this feature allows them to participate in Selective Hydration.
它们已经自然地将组件树分解成独立的单元。就像Suspense一样，这个特性允许它们参与Selective Hydration。

Let’s update our example to use Activity boundaries around the active tab:
让我们更新我们的示例，将Activity边界围绕活动标签：  

```jsx
function Page() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <TabButton onClick={() => setActiveTab('home')}>
        Home
      </TabButton>
      <TabButton onClick={() => setActiveTab('video')}>
        Video
      </TabButton>
      {/* use activity surround the tag */}
      <Activity mode={activeTab === "home" ? "visible" : "hidden"}>
        <Home />
      </Activity>
      <Activity mode={activeTab === "video" ? "visible" : "hidden"}>
        <Video />
      </Activity>
    </>
  )
}
```

Now our initial server-rendered HTML looks the same as it did in the original version, 
现在我们的初始服务器渲染的HTML与原始版本相同，

but thanks to Activity, React can hydrate the tab buttons first, before it even mounts Home or Video.
但是，由于Activity，React可以首先混合标签按钮，然后再挂载Home或Video。

Thus, in addition to hiding and showing content, Activity boundaries help improve your app’s performance during hydration by letting React know which parts of your page can become interactive in isolation.
因此，除了隐藏和显示内容外，Activity边界还可以通过让React知道哪些页面的部分可以在孤立的情况下变得交互式来提高应用程序的性能。

And even if your page doesn’t ever hide part of its content, you can still add always-visible Activity boundaries to improve hydration performance:
即使你的页面永远不会隐藏其内容的一部分，你仍然可以添加始终可见的Activity边界来提高混合性能：

> 好，整出加速秘籍了
```jsx
function Page() {
  return (
    <>
      <Post />

      <Activity>
        <Comments />
      </Activity>
    </>
  );
}

```

## Troubleshooting 
故障排除

### My hidden components have unwanted side effects
我的隐藏组件有不必要的副作用

An Activity boundary hides its content by setting display: none on its children and cleaning up any of their Effects. 
一个Activity边界通过设置display: none来隐藏其子元素，并清理它们的副作用。

So, most well-behaved React components that properly clean up their side effects will already be robust to being hidden by Activity.
所以，大多数良好行为的React组件，它们的副作用都被正确清理，已经可以被Activity隐藏。

But there are some situations where a hidden component behaves differently than an unmounted one. Most notably, 
但是有一些情况下，一个隐藏的组件的行为与未挂载的组件不同。最明显的是，

since a hidden component’s DOM is not destroyed, any side effects from that DOM will persist, even after the component is hidden.
由于隐藏组件的DOM不会被销毁，即使组件被隐藏，该DOM的副作用也会持续存在。

As an example, consider a <video> tag. Typically it doesn’t require any cleanup, because even if you’re playing a video, 
作为一个例子，考虑一个<video>标签。通常它不需要任何清理，因为即使你正在播放视频，

unmounting the tag stops the video and audio from playing in the browser. Try playing the video and then pressing Home in this demo:
卸载标签会停止浏览器中的视频和音频播放。尝试在这个演示中播放视频，然后按Home键：

code example...

The video stops playing as expected.
video停止播放如预期。

Now, let’s say we wanted to preserve the timecode where the user last watched, so that when they tab back to the video, it doesn’t start over from the beginning again.
现在，假设我们想要保留用户上次观看的时间码，以便当他们回到视频时，它不会从头开始。

This is a great use case for Activity!
这是一个很好的用例！

Let’s update App to hide the inactive tab with a hidden Activity boundary instead of unmounting it, and see how the demo behaves this time:
让我们用一个隐藏的Activity边界来代替卸载它，看看这个演示的行为：

code example...
```jsx
import { Activity, useState } from 'react';
import TabButton from './TabButton.js';
import Home from './Home.js';
import Video from './Video.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <>
      <TabButton
        isActive={activeTab === 'home'}
        onClick={() => setActiveTab('home')}
      >
        Home
      </TabButton>
      <TabButton
        isActive={activeTab === 'video'}
        onClick={() => setActiveTab('video')}
      >
        Video
      </TabButton>

      <hr />

      <Activity mode={activeTab === 'home' ? 'visible' : 'hidden'}>
        <Home />
      </Activity>
      <Activity mode={activeTab === 'video' ? 'visible' : 'hidden'}>
        <Video />
      </Activity>
    </>
  );
}

```

Whoops! The video and audio continue to play even after it’s been hidden, because the tab’s <video> element is still in the DOM.
Whoops! 即使它被隐藏了，视频和音频也会继续播放，因为标签的<video>元素仍然在DOM中。

To fix this, we can add an Effect with a cleanup function that pauses the video:
修复这个问题，我们可以添加一个带有清理函数的Effect来暂停视频：

```jsx
export default function VideoTab() {
  const ref = useRef();

  useLayoutEffect(() => {
    const videoRef = ref.current;

    return () => {
      videoRef.pause()
    }
  }, []);

  return (
    <video
      ref={ref}
      controls
      playsInline
      src="..."
    />

  );
}
```
We call useLayoutEffect instead of useEffect because conceptually the clean-up code is tied to the component’s UI being visually hidden. 
我们使用useLayoutEffect而不是useEffect，因为概念上，清理代码与组件的UI被视觉上隐藏有关。

If we used a regular effect, the code could be delayed by (say) a re-suspending Suspense boundary or a View Transition.
如果我们使用了一个常规的效果，代码可能会被延迟（比如）一个重新挂起的Suspense边界或一个View Transition。

Let’s see the new behavior. Try playing the video, switching to the Home tab, then back to the Video tab:
让我们看看新的行为。尝试播放视频，切换到主页标签，然后回到视频标签：

code example...

```jsx
import { useRef, useLayoutEffect } from 'react';

export default function Video() {
  const ref = useRef();

  useLayoutEffect(() => {
    const videoRef = ref.current

    return () => {
      videoRef.pause()
    };
  }, [])

  return (
    <video
      ref={ref}
      controls
      playsInline
      // 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    />

  );
}

```

It works great! Our cleanup function ensures that the video stops playing if it’s ever hidden by an Activity boundary, and even better, 
如期而至，它工作得很好！我们的清理函数确保如果它被Activity边界隐藏，视频就会停止播放，并且更好，

because the <video> tag is never destroyed, the timecode is preserved, and the video itself doesn’t need to be initialized or downloaded again when the user switches back to keep watching it.
因为<video>标签永远不会被销毁，时间码会被保留，并且当用户切换回来继续观看时，视频本身不需要被初始化或下载。

This is a great example of using Activity to preserve ephemeral DOM state for parts of the UI that become hidden, but the user is likely to interact with again soon.
这是一个很好的例子，说明如何使用Activity来保留UI的部分的短暂DOM状态，但用户很可能很快会与之交互。

Our example illustrates that for certain tags like <video>, unmounting and hiding have different behavior. If a component renders DOM that has a side effect, and you want to prevent that side effect when an Activity boundary hides it, add an Effect with a return function to clean it up.
我们的案例展示了对于像<video>这样的标签，卸载和隐藏有不同的行为。如果一个组件渲染DOM并且有一个副作用，并且你希望在Activity边界隐藏它时防止该副作用，添加一个带有返回函数的Effect来清理它。

The most common cases of this will be from the following tags:
最常见的情况是来自以下标签：

<video>
<audio>
<iframe>

Typically, though, most of your React components should already be robust to being hidden by an Activity boundary. And conceptually, you should think of “hidden” Activities as being unmounted.
有时，尽管大多数你的React组件已经可以被Activity边界隐藏，但从概念上讲，你应该将“隐藏”的Activity视为被卸载。

To eagerly discover other Effects that don’t have proper cleanup, which is important not only for Activity boundaries but for many other behaviors in React, we recommend using <StrictMode>.
为了及早发现没有正确清理的其他效果，这对于Activity边界和React中的许多其他行为来说都是重要的，我们建议使用<StrictMode>。

### My hidden components have Effects that aren’t running
我们的隐藏组件有未运行的效果

When an <Activity> is “hidden”, all its children’s Effects are cleaned up. Conceptually, the children are unmounted, but React saves their state for later. This is a feature of Activity because it means subscriptions won’t be active for hidden parts of the UI, reducing the amount of work needed for hidden content.
当一个<Activity>被“隐藏”时，所有它的子元素的效果都会被清理。从概念上讲，子元素被卸载，但React会保存它们的状态以供以后使用。这是Activity的一个特性，因为它意味着对于隐藏的UI部分，订阅不会处于活动状态，减少了隐藏内容所需的工作量。

If you’re relying on an Effect mounting to clean up a component’s side effects, refactor the Effect to do the work in the returned cleanup function instead.
如果您依赖于Effect挂载来清理组件的副作用，请将Effect重构为在返回的清理函数中执行工作。

To eagerly find problematic Effects, we recommend adding <StrictMode> which will eagerly perform Activity unmounts and mounts to catch any unexpected side-effects.
为了及早发现问题的效果，我们建议添加<StrictMode>，它会急切地执行Activity的卸载和挂载，以捕获任何意外的副作用。









