Vertical Cascading Menu (using JqueryUI)
=======================

This project is an implementation of the Jquery UI Menu Widget (http://jqueryui.com/menu/#default)

1. It takes a JSON Input and creates a corresponding vertical cascading menu recursively with potentially infinite depth
2. As of now, It only works for <ul><li> type of menu's.
3. You need to pass various options as Associative Array/Dictionary/hashable
4. An example:
   $("#main_menu_div").jvcMenu({json:json,
				alignChild:"alignChild",
				menu_id:"mainmenu",
				position: {my:"left", at: "right"}
			      });
5. Json object is mandatory. Without this, the JS will not be able to create the cascading menu.
5. Options explained
   *a. json - A string parsed as a json object.(DEFAULT: "")
      -Example:- 
      var data = '{"name":"Root","children":[{"name":"Option1"},{"name":"Option1","children":[{"name":"Option1.1","children":[{"name":"Option1.1.1","href":"#"},{"name":"Option1.1.2","href":"#"},{"name":"Option1.1.3","href":"#"}]},{"name":"Option1.2","children":[{"name":"Option1.2.1","href":"#"},{"name":"Option1.2.2","href":"#"},{"name":"Option1.2.3","href":"#"},{"name":"Option1.2.4","href":"#"}]},{"name":"Option1.3"}]}]}';

      var json = JSON.parse(data);
  
   *b. rootElement: The root element of the Json Object (Default: "Root")
   *c. alignChild: A CSS class to vertically align the parent-child elements(Recommended)
      -Example:-
            .alignChild{
                top: 0px !important;
            }
   *d. menu_id: An ID generator text for all your nested <ul>(Default: "main_menu")
   *e. position: JQUERY Option to set the position of the child element. Use alignChild class instead.
   *f. cssUL: A list of inline styles to be applied to the <ul> element
      (Default: {"font-family":'Helvetica,sans-serif',"font-size":"12px","width": "250px","background-color": "#F5F5F5"} )
   *g. cssLI:  A list of inline styles to be applied to the <li> element
      (Default: {"background-color": "#F5F5F5","border-bottom": "1px solid #CCCCCC"})
   *h. cssLink: A list of inline styles to be applied to the <a> element - the child of <li>
      (Default: {"font-size":"12px"} )
   *i. cssLIHoverClass: CSS class for the li:hover (Default: hoverClass)
      -Example:-
            .hoverClass{
                background: none !important;
                background-color: #890004 !important;
            }
   *j. cssLINKHoverClass: CSS class for a:hover (Default: hoverClassLink)
      -Example:-
            .hoverClassLink{
                color: #FFFFFF !important;
            }
   *k. createItem: A recursive function to parse the Json object and create the Cascading Vertical Menu. Do not override this until you are absolutely sure.
   *l. Other Jquery Options - For more information go to http://api.jqueryui.com/menu/
      Note: Do not use the "Menus" option since this list only works with <ul><li>. http://api.jqueryui.com/menu/#option-menus     
