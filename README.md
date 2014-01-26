# Behavior Drill Style Editor 
 
##Learning Competencies 

##Summary 

 Forms are what allows users to send data to the server.  They are much more than just logging in and signing up for email newsletters.

In this challenge, we're going to play with forms not as tools for sending data to the server, but as a way to allow users to manipulate the DOM using JavaScript.  Specifically, we're going to build a form that will allow a user to dynamically change the styles.

The purpose of this drill is to become familiar with using JavaScript to "grab" user-inputted data from a form and funnel it to the desired function.

To make it work, you should be familiar with the following concepts:

- [Basics of jQuery Events](http://learn.jquery.com/events/event-basics/) and [Event Handling](http://learn.jquery.com/events/handling-events/), specifically the `submit` event
- The jQuery [val() method](http://api.jquery.com/val/) and [css() method](http://api.jquery.com/css/)

If you bind to the `submit` event, you should consider using the [event.preventDefault() method](http://api.jquery.com/event.preventDefault/) provided by jQuery.

## Objectives

### Dynamic Styling

It may seem obvious what you have to do, but just to make it extra clear what the expected behavior is:

1. Enter a CSS selector (e.g. `h1`, `#header`, `.faded`) into the left input field
- Enter a CSS property (e.g. `color`, `padding`, `text-align`) into the center input field
- Enter a CSS value for the property (e.g. if the property is `color`, enter something like `blue` or `#00f`)
- Click the button and watch the page magically transform before your eyes!

Here is a video showing this behavior in action:

<iframe width="640" height="480" src="http://www.youtube.com/embed/oiVBJ0wPnLA?rel=0" frameborder="0" allowfullscreen></iframe>

In its essence, the solution to this problem can be broken down into three parts: (1) **retrieving** the values from the form, (2) **passing** those values into the correct jQuery function for manipulating CSS, and (3) **binding** the previous two parts to a particular event using an event handler.  If you think about it this way, you will (hopefully) write much cleaner and more loosely coupled code.

If you are having trouble solving this problem, ask yourself the following questions:

- Is my code correctly bound to the appropriate event?  If not, how can I test for this?
- Do I know how to retreive the values from the form?
- Am I correctly passing the user data into the function that modifies the page styles? 

##Releases
###Release 0 

##Optimize Your Learning 

##Resources