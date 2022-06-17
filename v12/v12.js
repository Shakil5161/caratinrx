
var caratinVariation = {
    init: function() {
        this.mainCss();
        this.mainJs();
    },
    mainCss: function() {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '' +
            /* CSS will be imported here */
            '';
    },
    mainJs: function() {
    	var htmlContent = `<div class="ab-hero">
	        <div class="ab-content"></div>
	        <div class="ab-hero-img">
	        <div class='before-after'>
	        <div class='diamond-img-left'>
		        <img src="https://moralstyle.com/wp-content/uploads/2022/06/Group-848.png" alt="" srcset="">
	        </div>
	        </div>
	        <div class='nail-img'>
	         <div class='diamond-img-right'><img src="https://moralstyle.com/wp-content/uploads/2022/06/Group-820.png" alt="" srcset=""></div>
	        <img src="https://moralstyle.com/wp-content/uploads/2022/06/v6.png" alt="" srcset=""></div>
	        </div>
    </div>`;
    document.querySelector('.hero-section  .container-lg').insertAdjacentHTML('beforeend',htmlContent);
    
    document.querySelector(".ab-content").insertAdjacentElement('afterbegin', document.querySelector('.hero-content'));
    
    document.querySelector('.ab-content .hero-text').innerText = 'Customized prescription medication delivered to your home.';
    
    document.querySelector('.hero-section .hero-title').innerHTML = `<span class="font-secondary">Nail fungus happens.
Fight it with Caratin </span>`

    }
};
(function pollOnload() {
    if (document.querySelector('.hero-section  .container-lg')) {
        try {
            caratinVariation.init();
            const styles = ["color: white", "background: #07090F", "font-size: 20px", "border: 3px solid red", "text-shadow: 1px 1px black", "padding: 5px"].join(";");
        console.log(`%cShakil Ahmed Software Engineer v12 - ${new Date().toLocaleDateString()}`, styles);
        } catch (error) {
            console.log('Initialization error:', error);
        }
    } else {
        setTimeout(pollOnload, 25);
    }
})();
