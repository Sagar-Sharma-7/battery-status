const batteryLevel = document.getElementById("battery_level");
const progressBar = document.getElementById("progressBar");
const chargingTime = document.getElementById("chargingTime");
const chargingStatus = document.getElementById("chargingStatus");

getBatteryInfo = async() => {
    const battery = await navigator.getBattery();
    console.log(battery);
    // const battery_level = `${battery.level * 100}%`;
    // batteryLevel.innerHTML = battery_level;
    // progressBar.style.width = battery_level;

    setInterval(() => {
    const battery_level = `${battery.level * 100}%`;
    const charging_time = 100 - (battery.level * 100);
    const charging_status = battery.charging;

    batteryLevel.innerHTML = battery_level;
    batteryLevel.getAttribute("aria-valuenow", (battery.level * 100));
    progressBar.style.width = battery_level;
    if(charging_time == 0){
        chargingTime.innerHTML = `Required Charging Time: ${charging_time} min`;
        chargingStatus.innerHTML="<img src='icon/full-battery.png' alt=''>"
    }else{
        chargingTime.innerHTML = `Required Charging Time: ${charging_time + 2} min`;
    }


    if(charging_status == true){
        chargingStatus.innerHTML = '<img src="icon/charging2.png" alt="charging">';
        progressBar.classList.add("progress-bar-animated");
    }else{
        chargingStatus.innerHTML = '';
        progressBar.classList.remove("progress-bar-animated");
    }
    }, 1000);
}

getBatteryInfo();