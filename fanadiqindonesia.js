/* How To Manage This Website? */
/* There Are 3 Places You Must Pay Attention When Addng New Data in Any Array:
    1- The Hotel Location Data (Bali , Jakarta , Puncak and Etc..)
    2- The Hotel Area Data (Keramas , Ubud , Kuta and Etc..)
    3- The Hotel Data (Komaneka Keramas , Samsara Ubud , Tejaprana and Etc..)
    
    Also Pay Attention To The Data That Be Inside Each Object in Any Array (Must Be The Same Spelling)
*/




/* Array For Hotel Location Data */
let fanadiqindonesia_hotelLocationArray = [
    {
        locationImgSrc: 'صور-موقع-الفنادق/bali.jpg',
        hotelLocationName: 'Bali',
        locationArrayName: 'fanadiqindonesia_baliHotelArray',
    },
    {
        locationImgSrc: 'صور-موقع-الفنادق/jakarta.jpg',
        hotelLocationName: 'Jakarta',
        locationArrayName: 'fanadiqindonesia_jakartaHotelArray',
    },
    {
        locationImgSrc: 'صور-موقع-الفنادق/puncak.jpg',
        hotelLocationName: 'Puncak',
        locationArrayName: 'fanadiqindonesia_puncakHotelArray',
    },
    {
        locationImgSrc: 'صور-موقع-الفنادق/bandung.jpg',
        hotelLocationName: 'Bandung',
        locationArrayName: 'fanadiqindonesia_bandungHotelArray',
    },
]









/* Function For Showing Full Screen Images */
function fanadiqindonesia_show_full_screen_image(src) {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    /* Create A Div To Contain The Big Image or Video */
    let FullScreenImgOverlay = document.createElement('div');
    FullScreenImgOverlay.classList.add("fanadiqindonesia_full_screen_img_overlay");

    /* Create A Button To Exit The Big Image or Video Page */
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('fanadiqindonesia_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";
    fullScreenOverlayExitButton.style.zIndex = '1000'; // Ensure the exit button is above the overlay

    /* Create The Big Image Element Based on The 'src' Value */
    let FullScreenImg = document.createElement('img');
    FullScreenImg.src = src;
    FullScreenImg.alt = "فنادق اندونيسيا";
    FullScreenImg.title = "فنادق اندونيسيا";
    FullScreenImg.classList.add('fanadiqindonesia_big_img');

    /* Append Image Element to FullScreenImgOverlay */
    FullScreenImgOverlay.appendChild(FullScreenImg);

    /* Append Exit Button to FullScreenImgOverlay */
    FullScreenImgOverlay.appendChild(fullScreenOverlayExitButton);

    /* Append FullScreenImgOverlay to the body */
    document.body.appendChild(FullScreenImgOverlay);

    /* Function To Exit The Big Image or Video Page */
    fullScreenOverlayExitButton.onclick = function () {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        /* Hide The Full Screen Img Overlay */
        FullScreenImgOverlay.style.display = 'none';

        /* Reset All Data Stored Inside The Full Screen Overlay Element */
        FullScreenImgOverlay.innerHTML = '';
    }
}











/* Open Website Guidance */
function fanadiqindonesia_websiteGuidance() {
    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    // Create A Div To Contain The Big Image
    let FullScreenGuidanceOverlay = document.createElement('div');
    FullScreenGuidanceOverlay.classList.add("fanadiqindonesia_full_screen_guidance_overlay");

    // Create A Button To Exit The Big Image Page
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('fanadiqindonesia_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";

    // Create Website Guidance Content
    let webGuidanceDiv = document.createElement('div');
    webGuidanceDiv.classList.add('web_guidance_div');

    let webGuidanceText = `
        <a itemprop="url" href="https://fanadiqindonesia.com">1- في الصفحة الرئيسية اختار نوع العمالة الاندونيسية.</a>
        <a itemprop="url" title="اسعار الاستقدام من اندونيسيا - اندو للجميع" href="https://fanadiqindonesia.com/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85-%D9%85%D9%86-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7">2- بعد اختيار نوع العمالة، خذ نظرة على اسعار الاستقدام ومدة إنجاز العمل.</a>
        <a onclick="fanadiqindonesia_whatsApp()">3- اخيرا، تواصل معنا لطلب الاستقدام او للمزيد من المعلومات والنصائح.</a>
    `;

    // Append All The elements inside 'FullScreenGuidanceOverlay'
    webGuidanceDiv.innerHTML = webGuidanceText;
    FullScreenGuidanceOverlay.appendChild(webGuidanceDiv);
    FullScreenGuidanceOverlay.appendChild(fullScreenOverlayExitButton);

    // Hide And Show Different Sections
    document.body.appendChild(FullScreenGuidanceOverlay);

    // Function To Exit The Big Image Page
    fullScreenOverlayExitButton.onclick = function () {
        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Remove the overlay if it exists
        if (document.body.contains(FullScreenGuidanceOverlay)) {
            document.body.removeChild(FullScreenGuidanceOverlay);
        }

        // Scroll Back The 'fanadiqindonesia_nav' Element After Exiting The Website Guidance Page
        fanadiqindonesia_nav.scrollIntoView({
            block: 'center',
            inline: 'center',
        });
    }
}
















if(document.getElementById('fanadiqindonesia_choose_pdf_file_section')){

// Function to add horizontal scrolling functionality
function addHorizontalScrolling(container) {
    container.addEventListener('mousedown', function (event) {
        if (event.button === 0) { // Check if left mouse button is clicked
            this.classList.add('grabbing'); // Add grabbing cursor style
            this.dataset.scrollX = this.scrollLeft; // Store initial scrollLeft position
            this.dataset.clientX = event.clientX; // Store initial clientX position

            let onMouseMove = function (event) {
                let deltaX = event.clientX - parseInt(this.dataset.clientX); // Calculate delta X
                this.scrollLeft = parseInt(this.dataset.scrollX) - deltaX; // Adjust scrollLeft position
            }.bind(this);

            let onMouseUp = function () {
                this.classList.remove('grabbing'); // Remove grabbing cursor style
                window.removeEventListener('mousemove', onMouseMove); // Remove event listeners
                window.removeEventListener('mouseup', onMouseUp);
            }.bind(this);

            window.addEventListener('mousemove', onMouseMove); // Listen for mouse movement
            window.addEventListener('mouseup', onMouseUp); // Listen for mouse release
        }
    });
}

/* Function To Show Hotel Location Section For Showing Close Sale Data */
showHotelCloseSaleDataFunction = function(){

    document.getElementById('fanadiqindonesia_choose_hotel_location_section').style.display = 'flex';

     /* Scroll Down To The 'fanadiqindonesia_choose_hotel_location_section' Element */
     setTimeout(() => {
        document.getElementById('fanadiqindonesia_choose_hotel_location_section').scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 100);
}


// Loop through the array to create location cards
fanadiqindonesia_hotelLocationArray.forEach((item) => {
    let { locationImgSrc, hotelLocationName, locationArrayName } = item;

    /* Create The Container Div With The Content */
    let hotelLocationInfoDiv = document.createElement("div");
    hotelLocationInfoDiv.classList.add("fanadiqindonesia_hotel_info_div");
    hotelLocationInfoDiv.onclick = () => { fanadiqindonesia_createHotelAreaCardsFunction(locationArrayName, hotelLocationName) };

    hotelLocationInfoDiv.innerHTML = `
            <div class="fanadiqindonesia_hotel_location_img_div">
                <img src='${locationImgSrc}' alt="فنادق اندونيسيا">
            </div>
            <div class="fanadiqindonesia_hotel_location_text_div">
                <h2>${hotelLocationName}</h2>
            </div>
        `;

    // Append the 'hotelLocationInfoDiv' to the 'fanadiqindonesia_choose_hotel_location_div'
    document.getElementById('fanadiqindonesia_choose_hotel_location_div').appendChild(hotelLocationInfoDiv);
});

// Add horizontal scrolling functionality to location div
addHorizontalScrolling(document.getElementById('fanadiqindonesia_choose_hotel_location_div'));


/* Function For Creating The Hotel Area Cards */
fanadiqindonesia_createHotelAreaCardsFunction = function (hotelLocationArrayName, hotelAreaName) {

    let hotelLocationArrays = {
        'fanadiqindonesia_baliHotelArray': fanadiqindonesia_baliHotelArray,
        'fanadiqindonesia_jakartaHotelArray': fanadiqindonesia_jakartaHotelArray,
        'fanadiqindonesia_puncakHotelArray': fanadiqindonesia_puncakHotelArray,
        'fanadiqindonesia_bandungHotelArray': fanadiqindonesia_bandungHotelArray
    };

    document.getElementById('fanadiqindonesia_choose_hotel_area_div').innerHTML = '';

    // Set the title for the hotel area section
    document.getElementById('fanadiqindonesia_choose_hotel_area_title').innerText = `اختار المنطقة في ${hotelAreaName}`;

    if (hotelLocationArrays[hotelLocationArrayName]) {
        hotelLocationArrays[hotelLocationArrayName].forEach((item) => {
            let { hotelAreaImgSrc, hotelAreaName, hotelPdfNameArray } = item;

            /* Create The Container Div With The Content */
            let hotelAreaInfoDiv = document.createElement("div");
            hotelAreaInfoDiv.classList.add("fanadiqindonesia_hotel_info_div");
            hotelAreaInfoDiv.onclick = () => { fanadiqindonesia_createHotelCardsFunction(hotelPdfNameArray) };

            hotelAreaInfoDiv.innerHTML = `
                    <div class="fanadiqindonesia_hotel_location_img_div">
                        <img src='${hotelAreaImgSrc}' alt="فنادق اندونيسيا">
                    </div>
                    <div class="fanadiqindonesia_hotel_location_text_div">
                        <h2>${hotelAreaName}</h2>
                    </div>
                `;

            // Append the 'hotelAreaInfoDiv' to the 'fanadiqindonesia_choose_hotel_area_div'
            document.getElementById('fanadiqindonesia_choose_hotel_area_div').appendChild(hotelAreaInfoDiv);
        });
    }

    // Add horizontal scrolling functionality to area div
    addHorizontalScrolling(document.getElementById('fanadiqindonesia_choose_hotel_area_div'));

    if (fanadiqindonesia_choose_hotel_area_section.style.display === 'none') {
        fanadiqindonesia_choose_hotel_area_section.style.display = 'flex';
    }

    /* Scroll Down To The 'fanadiqindonesia_choose_hotel_area_div' Element */
    setTimeout(() => {
        document.getElementById('fanadiqindonesia_choose_hotel_area_div').scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 100);
};


/* Function To Show Each Hotel Area Card PDF File Fore The Colse Sale Data */
fanadiqindonesia_createHotelCardsFunction = function(pdfName){

    window.open(`hotel-pdf/hotel-stope-sale/${pdfName}`)

}

}
























/* Open WhatsApp Chat */
function fanadiqindonesia_whatsApp() {
    // Create the WhatsApp URL with the phone number.
    let whatsappURL = 'https://wa.me/+6282210081028';

    // Open the WhatsApp chat window in a new tab.
    window.open(whatsappURL, '_blank');
}

/* Page Load Header Fade Animation */
setTimeout(function () {
    fanadiqindonesia_header.style.opacity = "1";
}, 100);

/* Scroll Up To The Beginning Icon */
function fanadiqindonesia_scrollUpIcon() {
    fanadiqindonesia_header.scrollIntoView({ top: 0, behavior: 'smooth' });
}

// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsModuleScript = document.createElement('script');
ioniconsModuleScript.type = 'module';
ioniconsModuleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.body.appendChild(ioniconsModuleScript);

// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsNomoduleScript = document.createElement('script');
ioniconsNomoduleScript.setAttribute('nomodule', '');
ioniconsNomoduleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.body.appendChild(ioniconsNomoduleScript);
