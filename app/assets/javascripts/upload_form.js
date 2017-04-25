
$(document).ready(function() {


  var is_src = function() {
    return document.getElementById('source_code_check').checked;
  };

  var is_angr = function() {
    return document.getElementById('angr_check').checked;
  };

  var is_afl = function() {
    return document.getElementById('afl_check').checked;
  };

  var is_network = function() {
    return document.getElementById('network_fuzz_check').checked;
  };

  var is_metaexploits = function() {
    return document.getElementById('metaexploits_check').checked;
  };

  $('#exploit_save').on('click', function() {
    if (is_src()) {
      document.getElementById('target_source_code').value = -1;
    }
    else {
      document.getElementById('target_source_code').value = -2;
    }

    if (is_angr()) {
      document.getElementById('target_angr').value = -1;
    }
    else {
      document.getElementById('target_angr').value = -2;
    }

    if (is_afl()) {
      document.getElementById('target_afl').value = -1;
    }
    else {
      document.getElementById('target_afl').value = -2;
    }

    if (is_network()) {
      document.getElementById('target_network_fuzz').value = -1;
    }
    else {
      document.getElementById('target_network_fuzz').value = -2;
    }

    if (is_metaexploits()) {
      document.getElementById('target_network_fuzz').value = -1;
    }
    else {
      document.getElementById('target_ismetaexploits').value = -2;
    }
  });



});
