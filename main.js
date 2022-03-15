var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
$('#datey').append(time);



$('#myform').on('submit',(e)=>{
    e.preventDefault()
    let usersTxt = $('#ourfeild').val();
    if(usersTxt == ''){
      alert('fill it buddy')
    }else{
      createItem(usersTxt);
    } 
})

function createItem(text){
    $('#todos').append(`<div class="d-flex align-items-center">
                <label
                  ><input type="checkbox" class="option-input radio" /><span
                    class="label-text"
                    >`+text+`</span
                  ></label
                >
                <button type="button" class="btn btn-outline-warning" onclick='deleteitem(this)'>delete</button>
              </div>`);
              $("#ourfeild").val('');
              $("#ourfeild").focus();
}
function deleteitem(element){
  element.parentElement.remove()
}

$(document).ready(function() {
$('input[type=checkbox]').change(function() {

if (this.checked) {
$(this).next(".label-text").css("text-decoration-line", "line-through");
} else {
$(this).next(".label-text").css("text-decoration-line", "none");
}

});
});