// THIS FUNCTION RETURNS SINGLE ELEMENT FROM DOM
_ = ele => document.querySelector(ele);

// THIS FUNCTION RETURNS ARRAY OF ELEMENTS FROM DOM
__ = ele => document.querySelectorAll(ele);

let name, hotelPrice, hotelType, roomPrice, roomType, nbOfPerson, nbOfDays;
_('.room').selectedIndex = 0;

_('.submit').onclick = (event) => {
    event.preventDefault();
    if (/^[A-Za-z]+$/.test(_('input[type="text"]').value)) {
        name = _('input[type="text"]').value;
        _('.name').innerText = '';
    } else {
        _('.name').innerText = 'Enter Correct Name';
    }

    hotelPrice = _('.hotel');
    if (!isNaN(hotelPrice.value)) {
        _('.hotelError').innerText = '';
        hotelPrice = hotelPrice.value;
        hotelType = _('.hotel').options[_('.hotel').selectedIndex].innerText;
    } else {
        _('.hotelError').innerText = 'Select Any Hotel Type';
    }

    roomPrice = _('.room').value;
    roomType = _('.room').options[_('.room').selectedIndex].innerText;

    nbOfPerson = _('.nbOfPerson');

    if (+nbOfPerson.value < 3 && +nbOfPerson.value > 0) {
        nbOfPerson = +nbOfPerson.value;
        _('.person').innerText = '';
    } else {
        _('.person').innerText = 'Enter More than 0 And Less than 3';
    }

    let checks = __('input[type="checkbox"]');
    let allChecks = '';
    let allCheckTotal = 0;

    checks.forEach(check => {
        if (check.checked) {
            allChecks += `<div>${check.value}</div>`;
            allCheckTotal += +check.value;
            console.log(allChecks);
        }
    });

    nbOfDays = _('.nbOfDays');

    if (+nbOfDays.value > 0) {
        nbOfDays = +nbOfDays.value;
        _('.days').innerText = '';
    } else {
        _('.days').innerText = 'Days Should be more than 0';
    }

    let subTotal = ((+allCheckTotal + +hotelPrice + +roomPrice) * nbOfDays) * nbOfDays;
    let gst = subTotal * 0.05;
    let qst = subTotal * 0.1;

    let totalBill = subTotal + gst + qst;

    if (name != undefined && !isNaN(hotelPrice)) {
        _('.reciept').innerText = `Name: ${name}\nHotel Price : $${hotelPrice}\nHotel Type: ${hotelType}\nRoom Price: $${roomPrice}\nRoom Type: ${roomType}\nNo. Of Persons: ${nbOfPerson}\nTotal Extra Price: $${allCheckTotal}\nDays: ${nbOfDays}\nSub Total: $${subTotal}\nQST: $${qst}\nGST: $${gst}\nTotal Bill: $${totalBill}
        `;
        _('.reciept').style.display = 'block';
    }

}

// TO RESET THE ENTIRE FORM 
resetDiv = () => _('.reciept').style.display = 'none';