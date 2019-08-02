// THIS FUNCTION RETURNS SINGLE ELEMENT FROM DOM
_ = ele => document.querySelector(ele);

// THIS FUNCTION RETURNS ARRAY OF ELEMENTS FROM DOM
__ = ele => document.querySelectorAll(ele);

function submit() {
    // TO CHECK IF TABLE ALREADY EXIST IN BODY
    if (_('body').contains(_('table'))) {
        _('table').remove();
    }

    firstName = _('.firstname input');
    lastName = _('.lastname input');

    // TO GET THE FIRST NAME IF INPUT IS FILLED
    if (firstName.value != '') {
        firstName = firstName.value;
        _('.fnameError').innerText = '';
    } else {
        _('.fnameError').innerText = 'Please enter first name';
    }

    // TO GET THE LAST NAME IF INPUT IS FILLED
    if (lastName.value != '') {
        lastName = lastName.value;
        _('.lnameError').innerText = '';
    } else {
        _('.lnameError').innerText = 'Please enter last name';
    }

    genders = __('input[name="sex"]');
    jobs = __('input[name="job"]');
    sex = '';
    allJobs = '';

    // TO SELECT THE GENDER IF RADIO IS CHECKED
    if ((genders[0].checked || genders[1].checked)) {
        _('.rbtnError').innerText = '';
        genders.forEach(gender => {
            if (gender.checked == true) {
                sex = gender.value;
            }
        });
    } else {
        _('.rbtnError').innerText = 'Please select gender';
    }

    // TO CHOOSE THE GENDER IF CHECKBOX IS CHECKED
    if ((jobs[0].checked || jobs[1].checked)) {
        _('.cbtnError').innerText = '';
        jobs.forEach(job => {
            if (job.checked == true) {
                allJobs += `<div>- ${job.value}</div>`;
            }
        });
    } else {
        _('.cbtnError').innerText = 'Please choose jobs';
    }

    // CHECKING IF EVERY FIELD IS FILLED 
    if (_('.rbtnError').innerText == '' && _('.cbtnError').innerText == '' && _('.lnameError').innerText == '' && _('.fnameError').innerText == '') {

        let table = `
        <table border='1'>
            <tr>
                <td><b>First Name: </b></td>
                <td>${firstName}</td>
            </tr>
            <tr>
                <td><b>Last Name: </b></td>
                <td>${lastName}</td>
            </tr>
            <tr>
                <td><b>Sex: </b></td>
                <td>${sex}</td>
            </tr>
            <tr>
                <td><b>Jobs: </b></td>
                <td>${allJobs}</td>
            </tr>
        </table>
        `;

        // SET THE UPDATED TABLE TO THE BODY
        _('body').innerHTML += table;
    }
}

// TO RESET THE ENTIRE FORM 
reset = () => location.reload();
