class CalendarNextMonth extends CustomButton
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
     * The go to next month button has been clicked.
     *
     * @return {CalendarNextMonth}
     */
    onclick()
    {
        this.dispatchEvent(new CalendarEvent('goto.nextmonth'));

        return this;
    }
}

document.registerElement('calendar-next-month', CalendarNextMonth);
