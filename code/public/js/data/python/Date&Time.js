QuizData.questions.push(
  {
    id: "py_datetime_1",
    topicId: "py_datetime",
    question: "Import the datetime module and print the current date and time.",
    mathSolution: "Use datetime.datetime.now() to get current date and time.",
    codeSolution: "import datetime\nnow = datetime.datetime.now()\nprint(now)",
    hint: "Use `datetime.datetime.now()`",
  },
  {
    id: "py_datetime_2",
    topicId: "py_datetime",
    question:
      "Import only the date class from datetime module and get today's date.",
    mathSolution: "Use date.today() to get current date.",
    codeSolution:
      "from datetime import date\ntoday = date.today()\nprint(today)",
    hint: "Use `from datetime import date`",
  },
  {
    id: "py_datetime_3",
    topicId: "py_datetime",
    question: "Create a date object for 25th December 2024.",
    mathSolution: "Use date(year, month, day) constructor.",
    codeSolution:
      "from datetime import date\nchristmas = date(2024, 12, 25)\nprint(christmas)  # 2024-12-25",
    hint: "Use `date(year, month, day)`",
  },
  {
    id: "py_datetime_4",
    topicId: "py_datetime",
    question: "Create a datetime object for 15th August 2024 at 10:30 AM.",
    mathSolution: "Use datetime(year, month, day, hour, minute, second).",
    codeSolution:
      "from datetime import datetime\nindependence = datetime(2024, 8, 15, 10, 30, 0)\nprint(independence)",
    hint: "Use `datetime(year, month, day, hour, minute, second)`",
  },
  {
    id: "py_datetime_5",
    topicId: "py_datetime",
    question:
      "Get the year, month, and day from today's date as separate variables.",
    mathSolution: "Use .year, .month, .day attributes of date object.",
    codeSolution:
      'from datetime import date\ntoday = date.today()\nyear = today.year\nmonth = today.month\nday = today.day\nprint(f"Year: {year}, Month: {month}, Day: {day}")',
    hint: "Access using `.year`, `.month`, `.day`",
  },
  {
    id: "py_datetime_6",
    topicId: "py_datetime",
    question:
      "Get the hour, minute, second, and microsecond from current time.",
    mathSolution: "Use .hour, .minute, .second, .microsecond attributes.",
    codeSolution:
      'from datetime import datetime\nnow = datetime.now()\nprint(f"Hour: {now.hour}, Minute: {now.minute}, Second: {now.second}, Microsecond: {now.microsecond}")',
    hint: "Access time components with `.hour`, `.minute`, `.second`",
  },
  {
    id: "py_datetime_7",
    topicId: "py_datetime",
    question: "Create a time object for 2:30:45 PM (14:30:45).",
    mathSolution: "Use time(hour, minute, second) constructor.",
    codeSolution:
      "from datetime import time\nmy_time = time(14, 30, 45)\nprint(my_time)  # 14:30:45",
    hint: "Use `time(hour, minute, second)`",
  },
  {
    id: "py_datetime_8",
    topicId: "py_datetime",
    question:
      "Get the current date and time and print it in YYYY-MM-DD HH:MM:SS format.",
    mathSolution:
      "datetime.now() returns datetime object with this format by default.",
    codeSolution:
      'from datetime import datetime\nnow = datetime.now()\nprint(now.strftime("%Y-%m-%d %H:%M:%S"))',
    hint: "Use `strftime()` with format codes",
  },
  {
    id: "py_datetime_9",
    topicId: "py_datetime",
    question: 'Format date as "DD/MM/YYYY" using strftime().',
    mathSolution: "Use %d for day, %m for month, %Y for year.",
    codeSolution:
      'from datetime import date\ntoday = date.today()\nformatted = today.strftime("%d/%m/%Y")\nprint(formatted)',
    hint: 'Use `"%d/%m/%Y"` format string',
  },
  {
    id: "py_datetime_10",
    topicId: "py_datetime",
    question:
      'Format datetime as "Month Name DD, YYYY" (e.g., "January 15, 2024").',
    mathSolution: "Use %B for full month name, %d for day, %Y for year.",
    codeSolution:
      'from datetime import datetime\nnow = datetime.now()\nformatted = now.strftime("%B %d, %Y")\nprint(formatted)',
    hint: 'Use `"%B %d, %Y"`',
  },
  {
    id: "py_datetime_11",
    topicId: "py_datetime",
    question: 'Format time as "HH:MM AM/PM" (12-hour format).',
    mathSolution: "Use %I for 12-hour hour, %M for minute, %p for AM/PM.",
    codeSolution:
      'from datetime import datetime\nnow = datetime.now()\nformatted = now.strftime("%I:%M %p")\nprint(formatted)',
    hint: 'Use `"%I:%M %p"`',
  },
  {
    id: "py_datetime_12",
    topicId: "py_datetime",
    question:
      'Parse the string "2024-03-15" into a date object using strptime().',
    mathSolution: "Use strptime(string, format) with %Y-%m-%d format.",
    codeSolution:
      'from datetime import datetime\ndate_str = "2024-03-15"\nparsed_date = datetime.strptime(date_str, "%Y-%m-%d")\nprint(parsed_date)',
    hint: "Use `datetime.strptime(string, format)`",
  },
  {
    id: "py_datetime_13",
    topicId: "py_datetime",
    question: 'Parse "15/03/2024 14:30:00" into datetime object.',
    mathSolution: 'Use format "%d/%m/%Y %H:%M:%S".',
    codeSolution:
      'from datetime import datetime\ndate_str = "15/03/2024 14:30:00"\nparsed = datetime.strptime(date_str, "%d/%m/%Y %H:%M:%S")\nprint(parsed)',
    hint: 'Use `"%d/%m/%Y %H:%M:%S"`',
  },
  {
    id: "py_datetime_14",
    topicId: "py_datetime",
    question: 'Parse "March 15, 2024" into a date object.',
    mathSolution: "Use %B for full month name, %d for day, %Y for year.",
    codeSolution:
      'from datetime import datetime\ndate_str = "March 15, 2024"\nparsed = datetime.strptime(date_str, "%B %d, %Y")\nprint(parsed)',
    hint: 'Use `"%B %d, %Y"` format',
  },
  {
    id: "py_datetime_15",
    topicId: "py_datetime",
    question:
      "Calculate the number of days between two dates: 2024-12-25 and 2024-01-01.",
    mathSolution: "Subtract two date objects to get timedelta, then use .days.",
    codeSolution:
      "from datetime import date\ndate1 = date(2024, 12, 25)\ndate2 = date(2024, 1, 1)\ndifference = date1 - date2\nprint(difference.days)  # 359",
    hint: "Subtract dates and use `.days`",
  },
  {
    id: "py_datetime_16",
    topicId: "py_datetime",
    question: "Add 30 days to today's date and print the new date.",
    mathSolution: "Use timedelta(days=30) and add to today.",
    codeSolution:
      "from datetime import date, timedelta\ntoday = date.today()\nfuture_date = today + timedelta(days=30)\nprint(future_date)",
    hint: "Use `timedelta(days=N)`",
  },
  {
    id: "py_datetime_17",
    topicId: "py_datetime",
    question: "Subtract 7 days from current date.",
    mathSolution: "Use timedelta with negative days or subtract.",
    codeSolution:
      "from datetime import date, timedelta\ntoday = date.today()\npast_date = today - timedelta(days=7)\nprint(past_date)",
    hint: "Use `timedelta(days=7)` with subtraction",
  },
  {
    id: "py_datetime_18",
    topicId: "py_datetime",
    question: "Add 2 hours and 30 minutes to current time.",
    mathSolution: "Use timedelta(hours=2, minutes=30).",
    codeSolution:
      "from datetime import datetime, timedelta\nnow = datetime.now()\nfuture = now + timedelta(hours=2, minutes=30)\nprint(future)",
    hint: "Use `timedelta(hours=H, minutes=M)`",
  },
  {
    id: "py_datetime_19",
    topicId: "py_datetime",
    question:
      'Find the day of the week for your birthday this year (e.g., "Monday").',
    mathSolution: 'Use strftime("%A") for full weekday name.',
    codeSolution:
      'from datetime import date\nbirthday = date(2024, 5, 15)\nweekday = birthday.strftime("%A")\nprint(weekday)',
    hint: 'Use `strftime("%A")`',
  },
  {
    id: "py_datetime_20",
    topicId: "py_datetime",
    question: "Check if year 2024 is a leap year using calendar module.",
    mathSolution: "Use calendar.isleap(year) function.",
    codeSolution:
      "import calendar\nprint(calendar.isleap(2024))  # True\nprint(calendar.isleap(2023))  # False",
    hint: "Use `calendar.isleap(year)`",
  },
  {
    id: "py_datetime_21",
    topicId: "py_datetime",
    question: "Get the number of days in February 2024 using calendar module.",
    mathSolution:
      "Use calendar.monthrange(year, month) returns (start_weekday, num_days).",
    codeSolution:
      "import calendar\n_, num_days = calendar.monthrange(2024, 2)\nprint(num_days)  # 29",
    hint: "Use `calendar.monthrange(year, month)[1]`",
  },
  {
    id: "py_datetime_22",
    topicId: "py_datetime",
    question:
      "Get the current timestamp (seconds since epoch) using time module.",
    mathSolution: "Use time.time() function.",
    codeSolution: "import time\ntimestamp = time.time()\nprint(timestamp)",
    hint: "Use `time.time()`",
  },
  {
    id: "py_datetime_23",
    topicId: "py_datetime",
    question: "Convert timestamp 1700000000 to datetime object.",
    mathSolution: "Use datetime.fromtimestamp(timestamp).",
    codeSolution:
      "from datetime import datetime\ntimestamp = 1700000000\ndt = datetime.fromtimestamp(timestamp)\nprint(dt)",
    hint: "Use `datetime.fromtimestamp(timestamp)`",
  },
  {
    id: "py_datetime_24",
    topicId: "py_datetime",
    question: "Convert datetime object to timestamp.",
    mathSolution: "Use datetime.timestamp() method.",
    codeSolution:
      "from datetime import datetime\nnow = datetime.now()\ntimestamp = now.timestamp()\nprint(timestamp)",
    hint: "Use `.timestamp()` method",
  },
  {
    id: "py_datetime_25",
    topicId: "py_datetime",
    question: "Display the current date in ISO format (YYYY-MM-DD).",
    mathSolution: "Use date.today().isoformat().",
    codeSolution: "from datetime import date\nprint(date.today().isoformat())",
    hint: "Use `.isoformat()` method",
  },
  {
    id: "py_datetime_26",
    topicId: "py_datetime",
    question: "Compare two dates: check if date1 is before date2.",
    mathSolution: "Use comparison operators (<, >, ==) with date objects.",
    codeSolution:
      "from datetime import date\ndate1 = date(2024, 6, 1)\ndate2 = date(2024, 12, 25)\nprint(date1 < date2)  # True",
    hint: "Dates support direct comparison operators",
  },
  {
    id: "py_datetime_27",
    topicId: "py_datetime",
    question: "Find the difference between two datetimes in seconds.",
    mathSolution: "Subtract datetimes, use total_seconds() on timedelta.",
    codeSolution:
      "from datetime import datetime\ndt1 = datetime(2024, 1, 1, 0, 0, 0)\ndt2 = datetime(2024, 1, 2, 0, 0, 0)\ndiff_seconds = (dt2 - dt1).total_seconds()\nprint(diff_seconds)  # 86400.0",
    hint: "Use `.total_seconds()` method",
  },
  {
    id: "py_datetime_28",
    topicId: "py_datetime",
    question: "Get the current UTC time (timezone-aware).",
    mathSolution: "Use datetime.now(timezone.utc) with timezone module.",
    codeSolution:
      "from datetime import datetime, timezone\nutc_now = datetime.now(timezone.utc)\nprint(utc_now)",
    hint: "Use `datetime.now(timezone.utc)`",
  },
  {
    id: "py_datetime_29",
    topicId: "py_datetime",
    question: "Create a timezone-aware datetime for Eastern Time (US).",
    mathSolution: 'Use zoneinfo.ZoneInfo("America/New_York") (Python 3.9+).',
    codeSolution:
      'from datetime import datetime\nfrom zoneinfo import ZoneInfo\nny_time = datetime.now(ZoneInfo("America/New_York"))\nprint(ny_time)',
    hint: 'Use `ZoneInfo("timezone_name")`',
  },
  {
    id: "py_datetime_30",
    topicId: "py_datetime",
    question: "Convert local time to UTC time.",
    mathSolution: "Make aware then use .astimezone(timezone.utc).",
    codeSolution:
      'from datetime import datetime, timezone\nfrom zoneinfo import ZoneInfo\nlocal = datetime.now(ZoneInfo("Asia/Kolkata"))\nutc = local.astimezone(timezone.utc)\nprint(f"Local: {local}")\nprint(f"UTC: {utc}")',
    hint: "Use `.astimezone(timezone.utc)`",
  },
  {
    id: "py_datetime_31",
    topicId: "py_datetime",
    question: "Find the next Monday from today's date.",
    mathSolution: "Calculate days to add based on weekday (Monday=0).",
    codeSolution:
      "from datetime import date, timedelta\ntoday = date.today()\ndays_ahead = 0 - today.weekday()\nif days_ahead <= 0:\n    days_ahead += 7\nnext_monday = today + timedelta(days=days_ahead)\nprint(next_monday)",
    hint: "Use `.weekday()` (Monday=0) to calculate offset",
  },
  {
    id: "py_datetime_32",
    topicId: "py_datetime",
    question: "Get the first and last day of current month.",
    mathSolution:
      "First day is date.today().replace(day=1). Last day uses monthrange.",
    codeSolution:
      'from datetime import date\nimport calendar\ntoday = date.today()\nfirst_day = today.replace(day=1)\n_, last_day_num = calendar.monthrange(today.year, today.month)\nlast_day = today.replace(day=last_day_num)\nprint(f"First: {first_day}, Last: {last_day}")',
    hint: "Use `.replace(day=1)` and `calendar.monthrange()`",
  },
  {
    id: "py_datetime_33",
    topicId: "py_datetime",
    question: "Calculate age in years from birthdate (1990-05-15).",
    mathSolution:
      "Subtract birth year from current year, adjust if birthday not occurred.",
    codeSolution:
      "from datetime import date\nbirth = date(1990, 5, 15)\ntoday = date.today()\nage = today.year - birth.year\nif (today.month, today.day) < (birth.month, birth.day):\n    age -= 1\nprint(age)",
    hint: "Adjust age if birthday hasn't occurred this year",
  },
  {
    id: "py_datetime_34",
    topicId: "py_datetime",
    question: "Get all dates between two given dates (inclusive).",
    mathSolution: "Use loop with timedelta to iterate dates.",
    codeSolution:
      "from datetime import date, timedelta\nstart = date(2024, 1, 1)\nend = date(2024, 1, 10)\ndates = []\ncurrent = start\nwhile current <= end:\n    dates.append(current)\n    current += timedelta(days=1)\nprint(dates)",
    hint: "Use while loop and `timedelta(days=1)`",
  },
  {
    id: "py_datetime_35",
    topicId: "py_datetime",
    question: "Check if a given date is a weekend (Saturday or Sunday).",
    mathSolution: "Use weekday() where Saturday=5, Sunday=6.",
    codeSolution:
      "from datetime import date\ndef is_weekend(d):\n    return d.weekday() >= 5\n\ndate1 = date(2024, 3, 16)  # Saturday\nprint(is_weekend(date1))  # True",
    hint: "`weekday()` returns 5 for Sat, 6 for Sun",
  },
  {
    id: "py_datetime_36",
    topicId: "py_datetime",
    question: 'Sleep for 3 seconds using time module and print "Done".',
    mathSolution: "Use time.sleep(seconds).",
    codeSolution:
      'import time\nprint("Waiting...")\ntime.sleep(3)\nprint("Done")',
    hint: "Use `time.sleep(seconds)`",
  },
  {
    id: "py_datetime_37",
    topicId: "py_datetime",
    question:
      "Measure the execution time of a function that sleeps for 1 second.",
    mathSolution: "Use time.time() before and after function.",
    codeSolution:
      'import time\nstart = time.time()\ntime.sleep(1)\nend = time.time()\nprint(f"Execution time: {end - start:.2f} seconds")',
    hint: "Record timestamps before and after",
  },
  {
    id: "py_datetime_38",
    topicId: "py_datetime",
    question: 'Parse ISO format string "2024-03-15T14:30:00" to datetime.',
    mathSolution: "Use datetime.fromisoformat() (Python 3.7+).",
    codeSolution:
      'from datetime import datetime\niso_str = "2024-03-15T14:30:00"\ndt = datetime.fromisoformat(iso_str)\nprint(dt)',
    hint: "Use `datetime.fromisoformat(string)`",
  },
  {
    id: "py_datetime_39",
    topicId: "py_datetime",
    question: "Get the current time in milliseconds since epoch.",
    mathSolution: "Multiply timestamp by 1000.",
    codeSolution:
      "import time\nmilliseconds = int(time.time() * 1000)\nprint(milliseconds)",
    hint: "`time.time()` returns seconds, multiply by 1000",
  },
  {
    id: "py_datetime_40",
    topicId: "py_datetime",
    question: "Find the day of the year (1-366) for today's date.",
    mathSolution: "Use datetime.timetuple().tm_yday.",
    codeSolution:
      "from datetime import date\ntoday = date.today()\nday_of_year = today.timetuple().tm_yday\nprint(day_of_year)",
    hint: "Use `.timetuple().tm_yday`",
  },
  {
    id: "py_datetime_41",
    topicId: "py_datetime",
    question: "Find the number of days until Christmas (December 25).",
    mathSolution:
      "Create Christmas date for current year, handle if already passed.",
    codeSolution:
      'from datetime import date\ntoday = date.today()\nchristmas = date(today.year, 12, 25)\nif today > christmas:\n    christmas = date(today.year + 1, 12, 25)\ndays_until = (christmas - today).days\nprint(f"Days until Christmas: {days_until}")',
    hint: "Check if Christmas already passed this year",
  },
  {
    id: "py_datetime_42",
    topicId: "py_datetime",
    question: "Get the quarter (1-4) of the current date.",
    mathSolution: "Quarter = (month - 1) // 3 + 1.",
    codeSolution:
      'from datetime import date\ntoday = date.today()\nquarter = (today.month - 1) // 3 + 1\nprint(f"Q{quarter}")',
    hint: "Use `(month - 1) // 3 + 1`",
  },
  {
    id: "py_datetime_43",
    topicId: "py_datetime",
    question: "Find the last Friday of the current month.",
    mathSolution: "Get last day of month, go back until Friday (weekday=4).",
    codeSolution:
      "from datetime import date, timedelta\nimport calendar\ntoday = date.today()\nlast_day = date(today.year, today.month, calendar.monthrange(today.year, today.month)[1])\nwhile last_day.weekday() != 4:  # Friday is 4\n    last_day -= timedelta(days=1)\nprint(last_day)",
    hint: "Friday has weekday = 4",
  },
  {
    id: "py_datetime_44",
    topicId: "py_datetime",
    question:
      'Get the human-readable relative time (e.g., "2 hours ago") from a past datetime.',
    mathSolution: "Calculate difference and choose appropriate unit.",
    codeSolution:
      'from datetime import datetime, timedelta\n\ndef time_ago(dt):\n    diff = datetime.now() - dt\n    seconds = diff.total_seconds()\n    if seconds < 60:\n        return f"{int(seconds)} seconds ago"\n    elif seconds < 3600:\n        return f"{int(seconds // 60)} minutes ago"\n    elif seconds < 86400:\n        return f"{int(seconds // 3600)} hours ago"\n    else:\n        return f"{int(seconds // 86400)} days ago"\n\npast = datetime.now() - timedelta(hours=5)\nprint(time_ago(past))  # 5 hours ago',
    hint: "Use conditional checks on total_seconds()",
  },
  {
    id: "py_datetime_45",
    topicId: "py_datetime",
    question: "Create a list of all Mondays in the current month.",
    mathSolution: "Iterate through month days, check weekday=0.",
    codeSolution:
      "from datetime import date, timedelta\nimport calendar\n\ntoday = date.today()\nfirst_day = date(today.year, today.month, 1)\nlast_day_num = calendar.monthrange(today.year, today.month)[1]\nmondays = []\n\nfor day in range(1, last_day_num + 1):\n    d = date(today.year, today.month, day)\n    if d.weekday() == 0:  # Monday is 0\n        mondays.append(d)\n\nprint(mondays)",
    hint: "Monday has weekday = 0",
  },
  {
    id: "py_datetime_46",
    topicId: "py_datetime",
    question: "Add 1 business day (weekday) to a date, skipping weekends.",
    mathSolution: "Add days, skip Saturday/Sunday.",
    codeSolution:
      "from datetime import date, timedelta\n\ndef add_business_days(d, days):\n    while days > 0:\n        d += timedelta(days=1)\n        if d.weekday() < 5:  # Monday=0 to Friday=4\n            days -= 1\n    return d\n\ntoday = date(2024, 3, 29)  # Friday\nprint(add_business_days(today, 1))  # Monday (April 1, 2024)",
    hint: "Weekdays have weekday() < 5",
  },
  {
    id: "py_datetime_47",
    topicId: "py_datetime",
    question: "Get the start and end of current week (Monday to Sunday).",
    mathSolution: "Find Monday (weekday=0), then add 6 days for Sunday.",
    codeSolution:
      'from datetime import date, timedelta\ntoday = date.today()\nstart_of_week = today - timedelta(days=today.weekday())\nend_of_week = start_of_week + timedelta(days=6)\nprint(f"Week: {start_of_week} to {end_of_week}")',
    hint: "Monday has weekday = 0",
  },
  {
    id: "py_datetime_48",
    topicId: "py_datetime",
    question:
      "Calculate the difference between two datetimes in months (approximate).",
    mathSolution:
      "Use year and month difference, ignore days for approximation.",
    codeSolution:
      "from datetime import date\n\ndef month_diff(date1, date2):\n    return (date2.year - date1.year) * 12 + (date2.month - date1.month)\n\nd1 = date(2024, 1, 15)\nd2 = date(2024, 6, 20)\nprint(month_diff(d1, d2))  # 5 months (approx)",
    hint: "Calculate `(year2-year1)*12 + (month2-month1)`",
  },
  {
    id: "py_datetime_49",
    topicId: "py_datetime",
    question: "Check if a given year has 53 weeks (ISO week numbering).",
    mathSolution:
      "Check if Dec 31 is week 53 or Jan 1 is week 1 of next year with Thursday.",
    codeSolution:
      "from datetime import date\n\ndef has_53_weeks(year):\n    dec31 = date(year, 12, 31)\n    return dec31.isocalendar()[1] == 53\n\nprint(has_53_weeks(2024))  # False (2024 has 52 weeks)\nprint(has_53_weeks(2020))  # True",
    hint: "Use `.isocalendar()[1]` to get ISO week number",
  },
  {
    id: "py_datetime_50",
    topicId: "py_datetime",
    question:
      "Schedule a function to run at a specific time tomorrow (without external libraries).",
    mathSolution: "Calculate seconds until target time and use time.sleep().",
    codeSolution:
      'import time\nfrom datetime import datetime, timedelta\n\ndef run_at_time(target_hour, target_minute):\n    now = datetime.now()\n    target = now.replace(hour=target_hour, minute=target_minute, second=0, microsecond=0)\n    if target <= now:\n        target += timedelta(days=1)\n    wait_seconds = (target - now).total_seconds()\n    print(f"Waiting {wait_seconds/60:.1f} minutes...")\n    time.sleep(wait_seconds)\n    print("Time to run!")\n\n# Uncomment to run: run_at_time(9, 0)  # Run at 9:00 AM tomorrow',
    hint: "Calculate seconds difference and use `time.sleep()`",
  },
);
