class CalendarPrevMonth extends CustomButton
{
    /**
     * Lifecycle callback. Custom element is being created.
     *
     * @see https://mdn.io/Web/Web_Components/Custom_Elements#Lifecycle_callbacks
     */
    createdCallback()
    {
        this.addEventListener('click', () => this.onclick());
    }

    /**
     * The go to previous month button has been clicked.
     *
     * @return {CalendarPrevMonth}
     */
    onclick()
    {
        this.dispatchEvent(new CalendarEvent('goto.prevmonth'));

        return this;
    }
}

document.registerElement('calendar-prev-month', CalendarPrevMonth);
