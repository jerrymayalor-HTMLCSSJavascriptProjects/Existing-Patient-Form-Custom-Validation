jQuery(function() { 

jQuery('input[name="input_716"]').change(function() {

     if ( jQuery(this).val() !== '') {
          if (jQuery(this).is(':checked') && jQuery(this).val() == 'Yes' ) {
               jQuery('#gform_save_41_footer_link').show();
          }else{
               jQuery('#gform_save_41_footer_link').hide();
          }
     } else {
          jQuery('#gform_save_41_footer_link').hide();
     }

});
     
//============================================================================================
jQuery('#input_41_642').change(function()  {
     // Get the entered date of birth as a Date object
     var dob = new Date(jQuery(this).val());
     
     // Get the current date as a Date object
     var today = new Date();
     
     // Calculate the age difference in milliseconds
     var diff = today.getTime() - dob.getTime();
     
     // Convert the age difference from milliseconds to years
     var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
     
     // Update the age input field with the calculated age
     console.log(age);

     jQuery('#input_41_640').val(age);
     
     
     
     if( age >= 16 ){
          jQuery('#field_41_749').css("display", "block");
          jQuery('#field_41_639').css("display", "none");
          jQuery('#field_41_648').css("display", "block");
          jQuery('input[name="input_648').removeAttr('disabled');
     }
     else{
          
          jQuery('#field_41_639').css("display", "block");
          jQuery('#field_41_749').css("display", "none");
          jQuery('#field_41_648').css("display", "none");
          jQuery('input[name="input_648').attr('disabled');
     }
});


//============================================================================================

// Are You An Existing Patient?
jQuery('input[name="input_716"]').change(function() {
     
     if (jQuery(this).is(':checked') && jQuery(this).val() == 'No') {
          window.location.href = 'https://www.midcitiespsychiatry.com/new-patient/#new-patient';
     }else{
          
     }
});
     

//============================================================================================
// DATE OF BIRTH
var maxDate = new Date();
jQuery('#input_41_642').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
     maxDate: maxDate,
});
     

//============================================================================================
// Resume Link anchor tag
jQuery('.resume_form_link').text('OK');


//============================================================================================
// Email Validations

// My Contact Information (Email)
var email_error_msg = "Please enter a valid email address. For example, name@example.com.";
// Regular expression to validate email address format
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


jQuery('#input_41_524').change(function() {     
     var emailInput1 =  jQuery('#input_41_524');
     var emailValue1 = emailInput1.val();     
     if (emailRegex.test(emailValue1)) {
          jQuery('.email_error_msg').remove();
     } 
     else {
          if ( jQuery('.email_error_msg').length ) {
               jQuery('.email_error_msg').remove();
               jQuery('#input_41_524').after('<p class="email_error_msg">' + email_error_msg + '</p>');
               emailInput1.val("");
          }
          else{
               jQuery('#input_41_524').after('<p class="email_error_msg">' + email_error_msg + '</p>');
               emailInput1.val("");
          }
          
     }     
}); 

jQuery('#input_41_665').change(function() {     
     var emailInput1 =  jQuery('#input_41_665');
     var emailValue1 = emailInput1.val();     
     if (emailRegex.test(emailValue1)) {
          jQuery('.email_error_msg').remove();
     } 
     else {
          if ( jQuery('.email_error_msg').length ) {
               jQuery('.email_error_msg').remove();
               jQuery('#input_41_665').after('<p class="email_error_msg">' + email_error_msg + '</p>');
               emailInput1.val("");
          }
          else{
               jQuery('#input_41_665').after('<p class="email_error_msg">' + email_error_msg + '</p>');
               emailInput1.val("");
          }
          
     }     
}); 

// Do you have a Psychotherapist?
jQuery('#input_41_603').change(function() {     
     var emailInput1 =  jQuery('#input_41_603');
     var emailValue1 = emailInput1.val();     
     if (emailRegex.test(emailValue1)) {
          jQuery('.email_error_msg').remove();
     } 
     else {
          if ( jQuery('.email_error_msg').length ) {
               jQuery('.email_error_msg').remove();
               jQuery('#input_41_603').after('<p class="email_error_msg">' + email_error_msg + '</p>');
               emailInput1.val("");
          }
          else{
               jQuery('#input_41_603').after('<p class="email_error_msg">' + email_error_msg + '</p>');
               emailInput1.val("");
          }
          
     }     
});

// Do you have a Psychologist?
jQuery('#input_41_611').change(function() {     
     var emailInput1 =  jQuery('#input_41_611');
     var emailValue1 = emailInput1.val();     
     if (emailRegex.test(emailValue1)) {
          jQuery('.email_error_msg').remove();
     } 
     else {
          if ( jQuery('.email_error_msg').length ) {
               jQuery('.email_error_msg').remove();
               jQuery('#input_41_611').after('<p class="email_error_msg">' + email_error_msg + '</p>');
               emailInput1.val("");
          }
          else{
               jQuery('#input_41_611').after('<p class="email_error_msg">' + email_error_msg + '</p>');
               emailInput1.val("");
          }
          
     }     
});


//============================================================================================
/*   Input field text only All Name Fields */

// Patient's Last Name
jQuery('#input_41_520').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});

// Medications Name
jQuery('#input_41_634').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});

// MDC-2
jQuery('#input_41_691').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});

// MDC-3
jQuery('#input_41_699').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});

// Side Effects 1
jQuery('#input_41_672').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});

// Side Effects 2
jQuery('#input_41_695').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});

// Side Effects 3
jQuery('#input_41_703').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});


// Appointment Reason Description
jQuery('#input_41_673').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});

// Other
jQuery('#input_41_711').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});

// Do you have a Psychotherapist?
// Name
jQuery('#input_41_598').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});

// Do you have a Psychologist?
// Name
jQuery('#input_41_606').keypress(function(event) {
     var inputValue = event.which;
     // allow letters and white space only
     if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue == 32)) {
          event.preventDefault();
     }
});


//============================================================================================
// My Insurance
var insurance_error_msg = "Please upload a PDF file only.";

// Please upload if you have a new Driver's License
// FRONT IMAGE
jQuery('#input_41_550').change(function(){
     var front_license = jQuery('#input_41_550');
     var file_drivers_front = this.files[0];
     var file_drivers_front_type = file_drivers_front.type;
     if (file_drivers_front_type !== 'application/pdf') {
          // alert('Please upload a PDF file only.');
          if ( jQuery('.insurance_error_msg').length ) {
               jQuery('.insurance_error_msg').remove();
               jQuery('#input_41_550').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
               front_license.val('');
          }
          else{
               jQuery('#input_41_550').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
               front_license.val('');
          }

     } else {
          jQuery('.insurance_error_msg').remove();
          console.log(front_license.val());
     }
     
});

// BACK IMAGE
jQuery('#input_41_551').change(function(){
     var back_license = jQuery('#input_41_551');
     var file_drivers_back = this.files[0];
     var file_drivers_back_type = file_drivers_back.type;
     if (file_drivers_back_type !== 'application/pdf') {
          // alert('Please upload a PDF file only.');
          if ( jQuery('.insurance_error_msg').length ) {
               jQuery('.insurance_error_msg').remove();
               jQuery('#input_41_551').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
               back_license.val('');
          }
          else{
               jQuery('#input_41_551').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
               back_license.val('');
          }
     } else {
          jQuery('.insurance_error_msg').remove();
          console.log(back_license.val());
     }
});

// Please upload if you have a new Insurance card
// FRONT IMAGE
jQuery('#input_41_559').change(function(){
     var front_license_2 = jQuery('#input_41_559');
     var file_drivers_front_2 = this.files[0];
     var file_drivers_front_type_2 = file_drivers_front_2.type;
     if (file_drivers_front_type_2 !== 'application/pdf') {
          // alert('Please upload a PDF file only.');
          if ( jQuery('.insurance_error_msg').length ) {
               jQuery('.insurance_error_msg').remove();
               jQuery('#input_41_559').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
               front_license_2.val('');
          }
          else{
               jQuery('#input_41_559').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
               front_license_2.val('');
          }

     } else {
          jQuery('.insurance_error_msg').remove();
          console.log(front_license_2.val());
     }
     
});

// BACK IMAGE
jQuery('#input_41_560').change(function(){
     var back_license_2 = jQuery('#input_41_560');
     var file_drivers_back_2 = this.files[0];
     var file_drivers_back_type_2 = file_drivers_back_2.type;
     if (file_drivers_back_type_2 !== 'application/pdf') {
          // alert('Please upload a PDF file only.');
          if ( jQuery('.insurance_error_msg').length ) {
               jQuery('.insurance_error_msg').remove();
               jQuery('#input_41_560').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
               back_license_2.val('');
          }
          else{
               jQuery('#input_41_560').after('<p class="insurance_error_msg">' + insurance_error_msg + '</p>');
               back_license_2.val('');
          }
     } else {
          jQuery('.insurance_error_msg').remove();
          console.log(back_license_2.val());
     }
});

//============================================================================================
// Do you have any changes in Medication?

// Start Date 
jQuery('#input_41_636').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
     onClose: function(date) { 
          jQuery('#input_41_637').datepicker('option','minDate', date);
     }
});
// End Date 
jQuery('#input_41_637').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
});

// Do you have any changes in Medication?
// MDC-2
// Start Date 
jQuery('#input_41_693').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
     onClose: function(date) { 
          jQuery('#input_41_694').datepicker('option','minDate', date);
     }
});
// End Date 
jQuery('#input_41_694').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
});

//MDC-3
// Start Date 
jQuery('#input_41_701').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
     onClose: function(date) { 
          jQuery('#input_41_702').datepicker('option','minDate', date);
     }
});
// End Date 
jQuery('#input_41_702').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
});



//============================================================================================
// Do you have a Psychotherapist?
// Date of last visit
jQuery('#input_41_604').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
     maxDate: maxDate,
});

// Do you have a Psychologist?
// Date of last visit
jQuery('#input_41_612').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
     maxDate: maxDate,
});


//============================================================================================
// Appointment Date
jQuery('#input_41_734').datepicker({
     dateFormat: 'mm/dd/yy',
     changeMonth: true,
     changeYear: true,
     yearRange: "c-100:c+20",
     minDate: maxDate,
});


//============================================================================================
// Are you having thoughts of harming yourself?
jQuery('input[name="input_740"]').change(function() {

     if ( jQuery(this).val() !== '') {

          if (jQuery(this).is(':checked') ) {
               if( jQuery(this).val() == 'Yes' || jQuery(this).val() == 'Yes and I am afraid I may act on them' ){
                    jQuery('#myModal').show();
               }else{
                    jQuery('#myModal').hide();
               }    
          }else{
               jQuery('#myModal').hide();
          }
     } else {
          jQuery('#myModal').hide();
     }

});

// Are you having thoughts of harming other people?
jQuery('input[name="input_741"]').change(function() {

     if ( jQuery(this).val() !== '') {
          if (jQuery(this).is(':checked') ) {
               if( jQuery(this).val() == 'Yes' || jQuery(this).val() == 'Yes and I am afraid I may act on them' ){
                    jQuery('#myModal').show();
               }else{
                    jQuery('#myModal').hide();
               }    
          }else{
               jQuery('#myModal').hide();
          }
     } else {
          jQuery('#myModal').hide();
     }

});

jQuery('#myModal, .close-btn').click(function() {
     jQuery('#myModal').hide();
});


//============================================================================================
});
