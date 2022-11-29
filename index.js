<script>                                             
var calculateTotal = function(event) {
  event.preventDefault();
  var price = document.getElementById("Price").value;
  document.getElementById("Total").value = price
}
var form = document.getElementById('item_form');
form.addEventListener('submit', calculateTotal, false);
</script>
