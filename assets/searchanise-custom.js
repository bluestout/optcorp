(function () {
  function mainCode($) {
    var items = [];

    $(document).on('Searchanise.ResultsUpdated', function(event, results) {
      prevData = Searchanise.GetWidgets().searchResults.getPrevData();

      if (prevData && prevData.result && prevData.result.items) {
        items = prevData.result.items;
      }

      if (items.length) {
        $.each(items, function(key, item) {
          var container = $('#snize-product-' + item.product_id).find('.snize-overhidden');

          if (!$('.SPCMP_chk_lbl', container).length) {
            container.append(
              '<label class="SPCMP_chk_lbl" style="">' +
              '<input type="checkbox" class="SPCMP_Add " name="SPCMP_chk" spcmp_pid="' + item.product_id + '" spcmp_vid="' + item.shopify_variants[0].variant_id + '">' +
              '<span class="SPCMP_Add_span" style="margin-left: 5px">Add to compare</span>' +
              '</label>'
            );
          }
        });
      }
    });

  }
  function waitUntilDefined() {
    if (typeof Searchanise !== "undefined" && typeof Searchanise.$ !== "undefined") {
      mainCode(Searchanise.$);
    } else {
      setTimeout(waitUntilDefined, 10);
    }
  }
  waitUntilDefined();
})();