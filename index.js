
$('#bootstrapForm').submit(function (event) {
    event.preventDefault()
    var extraData = {}
    $('#bootstrapForm').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  
        error: function () {           
            alert('Form Submitted. Thanks.')
            window.location = './thankyou.html'           
        }
    })
})