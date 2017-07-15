# modern-react-with-redux

Things needed in a react project:

* react
* react DOM
*

html:
* a place to put our elements, often called 'container'.
* it's the root node of the entire application
* all components end up being a child of/ nested inside of this root container element




Error messages:
`Target container is not a DOM element.`: React says: cool, I'm trying to render this component, but I have no idea where on the page to render it to

`React is not defined` - react(library x) has not been made available to this file. Import it in.

`Cannot find module "./components/video_list"` - data may not have a key (unique identifier)

`Cannot read property 'X' of undefined`: timing issues (classic undefined error). NOTE: these issues can happen a lot in react. It always wants to render instantly, it doesn't want to wait. Some parents just can't find information fast enough to satisfy the needs of a child object.








Approaches to implement in project:
* look at the design. Draw boxes around each component (before we start building it)
* how to design/ model our state - should do this before we start building stuff 

Rules:
* 1 component per files - no matter how small the component is
* component class starts with capital letter
* functional vs. class-based components. Start with functional based components, then if it turns out that you **need** a class based component, refactor!
* don't go more tan two levels deep (fro parent to child) with passing things down through callbacks (too confusing/ treasure hunt). Redux will help us wit h this
* we want to keep the views and the data level seperate

Look at:
* the events that react gives us
* controlled components


// const = constant (it is never going to change. We will NEVER reassign it.)






note to self: 'pre-populating' forms = setting default state to the info in the DB??


Redux
Redux is the data contained inside the application box. React is concerned with translating that data insto something to the screen that the user can interact with.

When Redux calls itself a 'state container' - what it really means is that is it a collection of all the data that describes the app. Hard data (list of books) + meta level properties such as ' what is the currently selected books. '


So why is this different to the way other frameworks handle data?
Other frameworks have collections of data
* redux centralizes all of the applications data inside of a central single object - we refer to this as the state
* state in redux is the **application level** state
* redux tells the components how or what they should be modelling


Bucket of data - Bucket of views
