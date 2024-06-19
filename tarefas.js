document.addEventListener('DOMContentLoaded', function() {
  const calendarGrid = document.querySelector('.calendar-grid tbody');
  const prevMonthBtn = document.querySelector('.prev-month');
  const nextMonthBtn = document.querySelector('.next-month');
  const currentMonthEl = document.querySelector('.current-month');
  const eventModal = document.querySelector('.event-modal');
  const closeModalBtn = document.querySelector('.close-modal');
  const saveEventBtn = document.querySelector('.save-event');
  const deleteEventBtn = document.querySelector('.delete-event');
  const eventTitleInput = document.querySelector('.event-title');
  const eventDescriptionInput = document.querySelector('.event-description');

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let selectedDay = null;
  let selectedEvent = null;
  let events = {};

  function renderCalendar() {
   
    for (let week = 0; week < 6; week++) {
      const rowEl = document.createElement('tr');
      for (let weekday = 0; weekday < 7; weekday++) {
        const cellEl = document.createElement('td');
        const day = (week * 7) + weekday + 1 - firstDay;
        if (day > 0 && day <= daysInMonth) {
          cellEl.textContent = day;
          cellEl.addEventListener('click', () => showEventModal(day));
        
          // Verificar se é o dia atual
          const today = new Date();
          if (day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            cellEl.classList.add('current-day');
          }
          // Verificar se o dia é anterior ao dia atual
          else if (day < today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            cellEl.classList.add('past-day');
          }
          // Verificar se o dia é posterior ao dia atual
          else if (day > today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            cellEl.classList.add('future-day');
          }
        
          // Verificar se existe um evento para o dia atual
          if (events[`${currentYear}-${currentMonth + 1}-${day}`]) {
            cellEl.classList.add('has-event');
          }
        }

        rowEl.appendChild(cellEl);
      }
      calendarGrid.appendChild(rowEl);
    }
  }

  function showEventModal(day) {
    selectedDay = day;
    eventModal.style.display = 'block';

    // Verificar se existe um evento para o dia selecionado
    const eventKey = `${currentYear}-${currentMonth + 1}-${selectedDay}`;
    if (events[eventKey]) {
      selectedEvent = events[eventKey];
      eventTitleInput.value = selectedEvent.title;
      eventDescriptionInput.value = selectedEvent.description;
      deleteEventBtn.style.display = 'inline-block';
    } else {
      selectedEvent = null;
      eventTitleInput.value = '';
      eventDescriptionInput.value = '';
      deleteEventBtn.style.display = 'none';
    }
  }

  function closeEventModal() {
    eventModal.style.display = 'none';
    eventTitleInput.value = '';
    eventDescriptionInput.value = '';
    selectedDay = null;
    selectedEvent = null;
  }

  function saveEvent() {
    const eventTitle = eventTitleInput.value.trim();
    const eventDescription = eventDescriptionInput.value.trim();

    if (eventTitle && selectedDay) {
      const eventKey = `${currentYear}-${currentMonth + 1}-${selectedDay}`;
      events[eventKey] = {
        title: eventTitle,
        description: eventDescription
      };

      // Atualizar a aparência da célula do calendário
      const cellEl = calendarGrid.querySelector(`td:nth-child(${selectedDay + (selectedDay - 1) * 6})`);
      cellEl.classList.add('has-event');

      console.log(`Evento salvo: ${eventTitle} (${selectedDay} de ${getMonthName(currentMonth)} de ${currentYear})`);
      closeEventModal();
      renderCalendar();
    }
  }

  function deleteEvent() {
    if (selectedEvent) {
      const eventKey = `${currentYear}-${currentMonth + 1}-${selectedDay}`;
      delete events[eventKey];

      // Atualizar a aparência da célula do calendário
      const cellEl = calendarGrid.querySelector(`td:nth-child(${selectedDay + (selectedDay - 1) * 6})`);
      cellEl.classList.remove('has-event');

      console.log(`Evento excluído: ${selectedEvent.title} (${selectedDay} de ${getMonthName(currentMonth)} de ${currentYear})`);
      closeEventModal();
      renderCalendar();
    }
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

  closeModalBtn.addEventListener('click', closeEventModal);
  saveEventBtn.addEventListener('click', saveEvent);
  deleteEventBtn.addEventListener('click', deleteEvent);

  renderCalendar();
});

function getMonthName(monthIndex) {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  return months[monthIndex];
}