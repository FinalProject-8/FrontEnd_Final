import React from 'react';

export function dateForm(year: number, month: number, date: number) {
  return year
    ? year +
        '. ' +
        ('00' + month.toString()).slice(-2) +
        '. ' +
        ('00' + date.toString()).slice(-2)
    : '날짜';
}
