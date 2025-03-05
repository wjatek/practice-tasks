# 1. Simple data processing

Your task is to process student data so that the function in the `index.js` script returns the correct values. **Do not modify any existing lines of code.**

## Instructions

1. Find the **youngest students** (under 20), sorted alphabetically by name.
2. Calculate the **average grade** for each student and create an array with students with an additional `avg` property rounded to two decimal places. Sort students by their average in descending order.
3. Find **top students** with an average grade above 80 sorted by their average in ascending order.
4. Calculate the **total average grade** across all students (using all grades, not individual student averages).

## Hints

Have to use:

```
Array.map()
Array.sort()
Array.filter()
Array.reduce()
Math.round()
```

Nice to use:

```
Array.flatMap()
String.localeComapare()
```
