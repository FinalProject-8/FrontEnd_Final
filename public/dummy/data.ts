export const CheckSubject = (subject: number) => {
  if (subject === 1) return '경찰행정학';
  else if (subject === 2) return '형사법';
  else return '경찰학';
};

export const ChangeDate = (date: string) => {
  return date.replaceAll('-', '.').slice(0, 10);
};
