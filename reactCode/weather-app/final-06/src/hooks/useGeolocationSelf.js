import { useEffect, useState } from 'react'

// 取消 useEffect 加载直接获取位置信息
// 按钮状态传递
// 根据位置信息 使用api 获取天气信息
// 使用useState 修改的结果注意 是异步的，获取最新的结果 可以临时变量存储

export default function () {
    const [textState, setTextState] = useState('get position')

    function getLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                alert("Geolocation is not supported by your browser");
                reject('Geolocation is not supported by your browser')
            } else {
                setTextState('loading...')
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setTextState('get forecast weather')
                        resolve({ latitude, longitude })
                    },
                    (error) => {
                        alert(error)
                        reject(error)
                        console.error(error)
                        setTextState(error.message)
                    });
            }

        })

    }


    return { getLocation, textState }
}