const iCalContent: PagesFunction = async (context) => {
  try {
    const calenderID = context.params.gcalid;
    if (!calenderID) {
      return new Response("No Calender ID provided", { status: 400 });
    }
    console.log(calenderID);
    const icalURL = new URL(`https://calendar.google.com/calendar/ical/${calenderID}/public/basic.ics`);
    const iCalData = await fetch(icalURL);
    console.log(iCalData.body);
    return new Response(iCalData.body, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Max-Age": "86400",
      },
    });
  } catch (error) {
    return new Response(`${error.message}`, { status: 500 });
  }
};

export const onRequest = [iCalContent];
