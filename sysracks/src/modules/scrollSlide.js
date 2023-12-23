export const scrollSlide = (trackId, thumbId, containerSelector, scrollSelector) => {
    const track = document.querySelector(trackId);
    const thumb = document.querySelector(thumbId);
    const scroll = document.querySelector(scrollSelector);
    const scrollContainer = document.querySelector(containerSelector);

    let mouseDown = false;

    const startDrag = () => {
        document.body.style.overflow = "hidden";
        return mouseDown = true;
    };

    const stopDrag = () => {
        document.body.style.overflow = "auto";
        return mouseDown = false
    };

    thumb.addEventListener("mousedown", startDrag);
    thumb.addEventListener("touchstart", startDrag);

    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    const moveSlider = (e) => {
        if (!mouseDown) return;

        let containerRect = track.getBoundingClientRect();
        let sliderHeigth = thumb.offsetHeight;
        let maxPosition = containerRect.height - sliderHeigth;


        let clientY = e.clientY || e.touches[0].clientY
        let mousePosition = clientY - containerRect.top;

        let sliderPosition = Math.min(
            maxPosition,
            Math.max(0, mousePosition - sliderHeigth / 2)
        );

        thumb.style.top = sliderPosition + "px";

        let maxOffset = scroll.offsetHeight - scrollContainer.offsetHeight;
        scrollContainer.scrollTop = (sliderPosition / maxPosition) * maxOffset;
    };

    track.addEventListener("mousemove", moveSlider);
    track.addEventListener("touchmove", moveSlider);
}