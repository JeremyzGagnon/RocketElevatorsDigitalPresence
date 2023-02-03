// Calling main() function
main();

function main() {

    // Make a list of the building type radio buttons	
    let radioBtns = document.querySelectorAll("input[name='inlineRadioOptions']");
        // Make a list of the quality radio buttons	
    let radioBtns2 = document.querySelectorAll("input[name='inlineRadioOptions2']");
        // Make a list of the currency radio buttons	
    let radioBtns3 = document.querySelectorAll("input[name='inlineRadioOptions3']");

    // finds the selected radio button
    let findSelected = () => {
        var building = document.querySelector("input[name='inlineRadioOptions']:checked").value;
        console.log("The selected radio button is: " + building)
        
        // calls the eventListener function to display the right fields
        eventListeners(building, mode);

        var mode = document.querySelector("input[name='inlineRadioOptions2']:checked").value;
        console.log("The selected radio button is: " + mode)

        var currency = document.querySelector("input[name='inlineRadioOptions3']:checked").value;
        console.log("The selected radio button is: " + currency)

        // Goes to the appropriate function depending of the building type and quality
        if (building == "Residential" && (mode == 'Standard' || mode == 'Premium' || mode == 'Excellum')) {
            var totalPrice;
            residentialPrice(building, mode, currency);
        }
        else if (building == "Commercial" && (mode == 'Standard' || mode == 'Premium' || mode == 'Excellum')) {
            var totalPrice;
            commercialPrice(building, mode, currency);

        }
        else if (building == "Industrial" && (mode == 'Standard' || mode == 'Premium' || mode == 'Excellum')) {
            var totalPrice;
            industrialPrice(building, mode, currency);
        }
    }
    // Everytime theres a change of button or one button is selected
    // it will trigger the findSelected() function
    radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener("change", findSelected);
        
    });

    radioBtns2.forEach(radioBtn2 => {
        radioBtn2.addEventListener("change", findSelected);
        
    });

    radioBtns3.forEach(radioBtn3 => {
        radioBtn3.addEventListener("change", findSelected);
        
    });

}				

function eventListeners(selectedButton) {
    // Display the correct input field associate with the building type
    if (selectedButton == "Residential") {
        document.getElementById('radio_button_1').classList.remove('hidden');
        document.getElementById('radio_button_2').classList.add('hidden');
        document.getElementById('radio_button_3').classList.add('hidden');
    }


    else if (selectedButton == "Commercial"){
        document.getElementById('radio_button_1').classList.add('hidden');
        document.getElementById('radio_button_2').classList.remove('hidden');
        document.getElementById('radio_button_3').classList.add('hidden');

    }
    else if (selectedButton == "Industrial"){
        document.getElementById('radio_button_1').classList.add('hidden');
        document.getElementById('radio_button_2').classList.add('hidden');
        document.getElementById('radio_button_3').classList.remove('hidden');

    }
}

function residentialPrice(buildingType, quality) {
    // This is a function to calculate the total cost of a Residential Building

    // Submit button associate with the form
    const submit_btn = document.getElementById('submit');
    // When the user click the button do this
    submit_btn.addEventListener('click', function() {
        
        // Variables declarations
        var numberOfAppartments = parseInt(document.getElementById("appartments").value);
        var numberOfFloors = parseInt(document.getElementById("floors").value);
        var appartementPerFloor = Math.ceil(numberOfAppartments / numberOfFloors); //average
        //Number of elevators depend on the number of appartments f(x)
        var numberOfElevators = Math.ceil((appartementPerFloor) / 6);

        // Calculate the number of elevators

        if (numberOfFloors > 20) {
            // Number of cylinders depends on the number of floors f(x)
            numberOfElevators *= (Math.ceil(numberOfFloors / 20));

        }
        
        var totalPrice;
        var fees;
        var pricePerElevators;
        // Checks the quality the user chose
        if (quality == "Standard") {
            pricePerElevators = 8000;
            fees = numberOfElevators * pricePerElevators * 0.10
            totalPrice = (numberOfElevators * pricePerElevators) + fees;
        }
        else if (quality == "Premium") {
            pricePerElevators = 12000;
            fees = numberOfElevators * pricePerElevators * 0.15
            totalPrice = (numberOfElevators * 12000) + fees;
        }
        else if (quality == "Excellum") {
            pricePerElevators = 15000;
            fees = numberOfElevators * 15000 * 0.20;
            totalPrice = (numberOfElevators * pricePerElevators) + fees;
        }
        
        // Sends the data to be displayed on the output fields
        displays(numberOfElevators,pricePerElevators, fees, totalPrice, buildingType);

    });
}

function commercialPrice(building, quality) {
    // This is a function to calculate the total cost of a Commercial Building

    // Submit button associate with the form
    const submit_btn = document.getElementById('submit');
    // When the user click the button do this
    submit_btn.addEventListener('click' ,function () {
        // Variables declarations
        // User Inputs
        var numberOfFloors = parseInt(document.getElementById("floors2").value);
        var numberOfOccupants = parseInt(document.getElementById('occupants').value);

        var totalOccupants = numberOfFloors * numberOfOccupants;
        var elevatorPerCylinder = Math.ceil(totalOccupants / 200);
        var cylinderNumber = Math.ceil(numberOfFloors / 10);
        var numberOfElevators = cylinderNumber * elevatorPerCylinder + cylinderNumber;


                            // Calculate the total price
        var totalPrice;
        var fees;
        var pricePerElevators;
        // Checks the quality the user chose
        if (quality == "Standard") {
            pricePerElevators = 8000;
            fees = numberOfElevators * pricePerElevators * 0.10
            totalPrice = (numberOfElevators * pricePerElevators) + fees;
        }
        else if (quality == "Premium") {
            pricePerElevators = 12000;
            fees = numberOfElevators * pricePerElevators * 0.15
            totalPrice = (numberOfElevators * 12000) + fees;
        }
        else if (quality == "Excellum") {
            pricePerElevators = 15000;
            fees = numberOfElevators * 15000 * 0.20;
            totalPrice = (numberOfElevators * pricePerElevators) + fees;
        }
        // Sends the data to be displayed
        displays(numberOfElevators,pricePerElevators, fees, totalPrice, building);
    });
}

function industrialPrice(building, quality) {
    // This is a function to calculate the total cost of a Industrial Building

    // Submit button associate with the form
    const submit_btn = document.getElementById('submit');
    // When the user click the button do this
    submit_btn.addEventListener('click', function () {

    // Variables declarations
    // User Input
    var numberOfElevators = parseInt(document.getElementById("elevator").value);
    // Calculate the total price
    var totalPrice;
    var fees;
    var pricePerElevators;
    // Checks the quality the user chose
    if (quality == "Standard") {
        pricePerElevators = 8000;
        fees = numberOfElevators * pricePerElevators * 0.10
        totalPrice = (numberOfElevators * pricePerElevators) + fees;
    }
    else if (quality == "Premium") {
        pricePerElevators = 12000;
        fees = numberOfElevators * pricePerElevators * 0.15
        totalPrice = (numberOfElevators * 12000) + fees;
    }
    else if (quality == "Excellum") {
        pricePerElevators = 15000;
        fees = numberOfElevators * 15000 * 0.20;
        totalPrice = (numberOfElevators * pricePerElevators) + fees;
    }
    
    // Sends the data to be displayed
    displays(numberOfElevators,pricePerElevators, fees, totalPrice, building);


    });
}

function displays(numberOfElevators, priceElevator, fees, total, building) {
    // This function displays the output to the user with the appropriate conversion

    // Checks which conversion to apply
    var usDollar = document.getElementById("inlineRadio7").checked;
    var canadianDollar = document.getElementById("inlineRadio8").checked;
    let formatter;

    // $.getJSON
    if (usDollar == true){
         formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            
                // These options are needed to round to whole numbers if that's what you want.
                //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
                //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
                }); 
                // Conversion price has February 3 2023 1:16pm
                priceElevator *= 0.75;
                fees *= 0.75;
                total *= 0.75;
    }
    else {
         formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'CAD',
    
        });
    }

    // Removes the Not a number problem and display result

    if ((document.getElementById("appartments").value == '' || document.getElementById("floors").value == '') && building=="Residential"){
            blankPlaceholder();
        }

    else if ((document.getElementById("floors2").value == '' || document.getElementById("occupants").value == '') && building=='Commercial') {
            blankPlaceholder();
        }

    else if (document.getElementById("elevator").value == '' && building =='Industrial') {
            blankPlaceholder();
        }

    else {
        document.getElementById("display_elevators_amount").placeholder = numberOfElevators;
        document.getElementById("display_price_elevator").placeholder = formatter.format(priceElevator);
        document.getElementById("display_installation_fees").placeholder = formatter.format(fees);
        document.getElementById("display_total_cost").placeholder = formatter.format(total);

    };
}

function blankPlaceholder(){
    document.getElementById("display_elevators_amount").placeholder = '';
    document.getElementById("display_price_elevator").placeholder = '';
    document.getElementById("display_installation_fees").placeholder = '';
    document.getElementById("display_total_cost").placeholder = '';

}
