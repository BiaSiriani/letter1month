$(document).ready(function() {
  const calendarGrid = document.querySelector('#calendar tbody');
  const prevMonthBtn = document.querySelector('.prev-month');
  const nextMonthBtn = document.querySelector('.next-month');
  const currentMonthEl = document.querySelector('.current-month');
  const eventTable = $('#eventTable').DataTable({
    searching: false,
    paging: false,
    info: false,
    order: [[0, 'asc']], // Ordena por data ascendente
    columnDefs: [
      { targets: [3], orderable: false } // Desabilita ordenação para coluna de ações
    ]
  });

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  function renderCalendar() {
    calendarGrid.innerHTML = '';
    currentMonthEl.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let dayCounter = 1;
    for (let week = 0; week < 6; week++) {
      const rowEl = document.createElement('tr');
      for (let weekday = 0; weekday < 7; weekday++) {
        const cellEl = document.createElement('td');
        if (week === 0 && weekday < firstDay) {
          cellEl.classList.add('blank');
        } else if (dayCounter > daysInMonth) {
          cellEl.classList.add('blank');
        } else {
          const date = new Date(currentYear, currentMonth, dayCounter);
          cellEl.textContent = dayCounter;
          cellEl.dataset.date = formatDate(date); // Adiciona atributo data-date
          cellEl.addEventListener('click', () => showEventModal(date));
          dayCounter++;
        }
        rowEl.appendChild(cellEl);
      }
      calendarGrid.appendChild(rowEl);
    }
  }

  function showEventModal(date) {
    $('#eventDate').val(formatDate(date)); // Define a data no modal
    $('#eventModal').modal('show'); // Mostra o modal
  }

  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function getMonthName(monthIndex) {
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return monthNames[monthIndex];
  }

  prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });

  nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });

  $('#saveEventBtn').on('click', function() {
    const eventId = $('#eventId').val();
    const eventDate = $('#eventDate').val();
    const eventTitle = $('#eventTitle').val();
    const eventDescription = $('#eventDescription').val();

    // Adicionar evento ao DataTable
    eventTable.row.add([eventDate, eventTitle, eventDescription, `
     
      <button type="button" class="btn btn-sm btn-danger delete-btn">Excluir</button>
    `]).draw();

    $('#eventModal').modal('hide');
  });

  // Eventos para editar e excluir
  $('#eventTable tbody').on('click', '.edit-btn', function() {
    const data = eventTable.row($(this).parents('tr')).data();
    $('#eventId').val(data[0]); // Define o ID do evento
    $('#eventDate').val(data[0]); // Define a data do evento
    $('#eventTitle').val(data[1]); // Define o título do evento
    $('#eventDescription').val(data[2]); // Define a descrição do evento
    $('#eventModal').modal('show');
  });

  $('#eventTable tbody').on('click', '.delete-btn', function() {
    eventTable.row($(this).parents('tr')).remove().draw();
  });

  renderCalendar();
});
