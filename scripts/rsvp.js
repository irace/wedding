$(function () {
  $('.attendance-choice-accept').change(function () {
    enable_fields('.attending-fields');
  });

  $('.attendance-choice-decline').change(function () {
    disable_fields('.attending-fields');
  });

  $('.guest-choice-yes').change(function () {
    enable_fields('.guest-fields');
  });

  $('.guest-choice-no').change(function () {
    disable_fields('.guest-fields');
  });

  function enable_fields(selector) {
    $(selector).css({'opacity': 1});
    $(selector).find('input').prop('disabled', false);
  }

  function disable_fields(selector) {
    $(selector).css({'opacity': 0.2});
    $(selector).find('input').prop('disabled', true);
    $(selector).find('input[type=radio]').prop('checked', false);
    $(selector).find('input[type=text]').val('');
  }
});
