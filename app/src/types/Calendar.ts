
export interface CalendarEvent {
  id?: null|number,
  calendar: null | number,
  title: string | null,
  url: string | null,
  description: string | null,
  start: Date | null,
  end: Date | null,
}

export interface ProjectCalendar {
  id: null|number,
  type: string|null,
  holiday_codes: string|null,
  events: CalendarEvent[]
}
