const renderMenu = () => {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.innerHTML = `
        <div class="menu">
        <div class="quick-nav">
            <div>Quick Navigation</div>
            <a href="#lunch-dinner">Lunch and Dinner</a>
            <a href="#dessert">Dessert</a>
            <a href="#drinks">Drinks</a>
        </div>
        
        <span class="title" id="lunch-dinner">Lunch and Dinner</span>
        <div class="lunch-dinner">
            <div class="menu-item">
                <div>Receive the Blessing of East Blue</div>
                <img style="margin-top: 10%" src="./imgs/menu-items/lunch-dinner/blessing-east-blue.png" alt="">
            </div>
            <div class="menu-item">
                <div>In Order to Save My Friends: The Vow with Shanks</div>
                <img src="./imgs/menu-items/lunch-dinner/save-my-friends.png" alt="">
            </div>
            <div class="menu-item">
                <div>"In the Name of Absolute Justice": The Birth of a Man Becoming a Marine Officer</div>
                <img src="./imgs/menu-items/lunch-dinner/absolute-justice-kids.png" alt="">
            </div>
            <div class="menu-item">
                <div>"In the Name of Absolute Justice": The Birth of a Man Becoming a Marine Officer (kids)</div>
                <img src="./imgs/menu-items/lunch-dinner/absolute-justice.png" alt="">
            </div>
            <div class="menu-item">
                <div>"Honorable Liar": Proud Warrior's Departure</div>
                <img src="./imgs/menu-items/lunch-dinner/honorable-liar.png" alt="">
            </div>
            <div class="menu-item">
                <div>The Fighting Cook who Had the Same Dream: The Pirate and the Little Eggplant</div>
                <img src="./imgs/menu-items/lunch-dinner/fighting-cook.png" alt="">
            </div>
            <div class="menu-item">
                <div>Aiming to be the Best Swordsman in the World: Battle of the "Strong Man"</div>
                <img src="./imgs/menu-items/lunch-dinner/best-swordsman.jpg" alt="">
            </div>
            <div class="menu-item">
                <div>The One Spear that Comes from the Gut: Courage that Sticks to its Convictions</div>
                <img src="./imgs/menu-items/lunch-dinner/the-one-spear.png" alt="">
            </div>
            <div class="menu-item">
                <div>The Day of Freedom from Control: The Happy Celebration at the End</div>
                <img src="./imgs/menu-items/lunch-dinner/day-of-freedom.png" alt="">
            </div>
        </div>
        <span class="title" id="dessert">Dessert</span>
        <div class="dessert">
            <div class="menu-item">
                <div>Red Nose's Great Adventure: "Raspberry Mousse" - Garnished with Bara-Bara Fruit</div>
                <img src="./imgs/dessert/red-nose.png" alt="">
            </div>
            <div class="menu-item">
                <div>Beautiful Lady: Glossy and Smooth Creme Brulee</div>
                <img src="./imgs/dessert/beautiful-lady.png" alt="">
            </div>
            <div class="menu-item">
                <div>A Gentleman's Taste: Apology - Panna Cotta and Macedonia Combination with Orange Sauce</div>
                <img src="./imgs/dessert/gentleman-taste.png" alt="">
            </div>
            <div class="menu-item">
                <div>Sparks Fall: Moku-Moku Shaved Ice</div>
                <img src="./imgs/dessert/sparks-fall.png" alt="">
            </div>
            <div class="menu-item">
                <div>Nami's Orange Jelly</div>
                <img src="./imgs/dessert/nami-mikan-jelly.png" alt="">
            </div>
        </div>
        <span class="title" id="drinks">Drinks</span>
        <div class="drinks">
            <div class="menu-item">
                <div>Luffy: "I'm going to become King of the Pirates!" - Berry Berry Squash</div>
                <img src="./imgs/drinks/luffy-drink.png" alt="">
            </div>
            <div class="menu-item">
                <div>Zoro: "Thank you. I can still become stronger." - Kiwi Lassi</div>
                <img src="./imgs/drinks/zoro-drink.png" alt="">
            </div>
            <div class="menu-item">
                <div>Sanji: "Do you know All Blue?" - Blue Ocean</div>
                <img src="./imgs/drinks/sanji-drink.png" alt="">
            </div>
            <div class="menu-item">
                <div>Cocoyasi Village: "Never forget the strength to continue laughing." - Bellemere's Orange Juice</div>
                <img src="./imgs/drinks/nami-drink.png" alt="">
            </div>
            <div class="menu-item">
                <div>Scurvy: "Almost had him!" - Lime Juice to Save Yosaku</div>
                <img src="./imgs/drinks/scurvy-drink.png" alt="">
            </div>
            <div class="menu-item">
                <div>Going Merry: "Yes! It's complete! With this, the pirate ship Going Merry is ready!" - Milky Cocktail with a Black Currant Aroma</div>
                <img src="./imgs/drinks/going-merry-drink.png" alt="">
            </div>
            <div class="menu-item">
                <div>Usopp: "For the sake of becoming a true warrior of the sea" - Mixed Vegetable Juice Red Eye Kiwi Lassi</div>
                <img src="./imgs/drinks/usopp-drink.png" alt="">
            </div>
        </div>
        <div style="margin-bottom: 2%;">
            <a href="#">Back To Top</a>
        </div>
    </div>
    `
    content.appendChild(menu);
}


export default renderMenu;