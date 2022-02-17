const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        console.log('Error asd123', err);
    }
}

button.addEventListener('click', async () => {
   button.disabled = true;

   // Start picture in picture
    await videoElement.requestPictureInPicture();

    // Reset the button
    button.disabled = false;
});

selectMediaStream();