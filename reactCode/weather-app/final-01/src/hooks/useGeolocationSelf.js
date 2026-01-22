import { useEffect, useState } from 'react'

export default function () {
    const [position, setPosition] = useState(null)
    function getLocation() {

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    setPosition({ latitude, longitude })
                },
                (error) => {
                    alert(error)
                    console.error(error)
                });
        }
    }

    // 需要加载时候调用位置信息 
    useEffect(() => {
        getLocation()
    }, [])
    console.log(position)
    return position
}