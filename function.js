    function showTab(id, event) {
      document.querySelectorAll('.content').forEach(sec => sec.classList.remove('active'))
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'))
      document.getElementById(id).classList.add('active')
      event.target.classList.add('active')
    } 