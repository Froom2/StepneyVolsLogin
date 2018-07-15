export class User {
      firstName: string;
      lastName: string;
    //   dateOfBirth: Date;
      volunteerType: string;
    //   visits: Visit[];
      dayAndMonthOfBirth: string;
}

export class Visit {
    dateTime: Date;
    eventType: string;
    purpose: string;
}
