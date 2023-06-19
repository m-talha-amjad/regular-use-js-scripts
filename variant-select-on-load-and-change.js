// When Page is loaded check for variant url 
// selected variant
// <div class="selected-variant"  data-id="{{- product.selected_or_first_available_variant.id -}}"></div>
  var url = window.location.href,
    parts = url.split("?variant="),
    last_part = parts[parts.length - 1];
  if (!isNaN(last_part)) {
    last_part = Number(last_part);
  } else {
    var selectedVariant = document.querySelector('.selected-variant');
    last_part = parseInt(selectedVariant.dataset.id);
    console.log(last_part);
  }
// Parent element of all the variants
// <div
//   data-product-id="{{ product.id }}"
//   class="hide custom-variant-data-wrap"
//   aria-hidden="true"
//   >
//   {%- for variant in product.variants -%}
//     <div
//       class="custom-variant-data"
//       data-id="{{ variant.id }}"
//       data-quantity="{{ variant.inventory_quantity | default: 0 }}"
//     >
//     </div>
//   {%- endfor -%}
// </div>
  var variantDataWrap = document.querySelector('.custom-variant-data-wrap');
// all the variants
  var variantDataList = inventoryDataWrap.querySelectorAll('.custom-variant-data');

  var dataQuantity = null;
  variantDataList.forEach(function(inventoryData) {
    var dataId = parseInt(inventoryData.dataset.id);
    if (dataId === last_part) {
      dataQuantity = parseInt(inventoryData.dataset.quantity);
    }
  });

// Get all variant-input elements
var variantInputs = document.querySelectorAll('.variant-input');

// Add event listener for each variant-input element
// ===============================================
variantInputs.forEach(function(variantInput) {
  variantInput.addEventListener("click", function(event) {
    setTimeout(function() {
      var url = window.location.href,
        parts = url.split("?variant="),
        last_part = parts[parts.length - 1];
      if (!isNaN(last_part)) {
        last_part = Number(last_part);
      } else {
        var selectedVariant = document.querySelector('.selected-variant');
        last_part = Number(selectedVariant.dataset.id);
      }

      var variantDataWrap = document.querySelector('.custom-variant-data-wrap');
    // all the variants
      var variantDataList = inventoryDataWrap.querySelectorAll('.custom-variant-data');

      var dataQuantity = null;
      variantDataList.forEach(function(inventoryData) {
        var dataId = parseInt(inventoryData.dataset.id);
        if (dataId === last_part) {
          dataQuantity = parseInt(inventoryData.dataset.quantity);
        }
      });

      // Use the dataQuantity variable as needed
      console.log(dataQuantity);

    }, 500);
  });
});
