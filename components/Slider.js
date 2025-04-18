export default function Slider() {
    return (
        `
    <article class="slider-container">
        <section class="slider">
            <div class="slides">
                <div class="slide active">
                    <img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante">
                </div>
                <div class="slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante">
                </div>
                <div class="slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante">
                </div>
                <div class="slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante">
                </div>
                <div class="slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante">
                </div>
                <div class="slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante">
                </div>
                <div class="slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante">
                </div>
                <div class="slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante">
                </div>
                <div class="slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/1996/1996068.png" alt="Logo del restaurante">
                </div>
                </div>
                
            </section>
            <section>
            <div class="controls">
                    <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
                    <button class="next" onclick="moveSlide(1)">&#10095;</button>
                </div>
            </section>
            <section class="slider-indicators">
                <span class="indicator" onclick="currentSlide(1)"></span>
                <span class="indicator" onclick="currentSlide(2)"></span>
                <span class="indicator" onclick="currentSlide(3)"></span>
                <span class="indicator" onclick="currentSlide(4)"></span>
                <span class="indicator" onclick="currentSlide(5)"></span>
            </section>
        </article>
    
    `
    )
} 