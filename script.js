function download() {
    var link = document.createElement('a');
    link.href = './NasipKey.apk'; // путь к файлу, который нужно скачать
    link.download = './NasipKey.apk'; // имя файла, которое будет предложено при скачивании
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

