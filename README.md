<h2>Vertical Cascading Menu (using JqueryUI)</h2>

<h4>This project is an implementation of the Jquery UI Menu Widget (http://jqueryui.com/menu/#default)</h4>
<ol style="font-family: Arial, Sans-serif;font-size: 14px;">
    <li> It takes a JSON Input and creates a corresponding vertical cascading menu recursively with potentially infinite depth
    <li> As of now, It only works for &lt;ul&gt; &lt;li&gt; type of menu's.
    <li> You need to pass various options as Associative Array/Dictionary/hashable
    <li> <b>An example:</b>
         <br><i>$("#main_menu_div").jvcMenu({json:json,
                                    alignChild:"alignChild",
                                    menu_id:"mainmenu",
                                    position: {my:"left", at: "right"}
                                  });</i>
    <li> Json object is mandatory. Without this, the JS will not be able to create the cascading menu.
    <li><h4><b>Options explained</b></h4>
        <ul>
           <li> <b>json</b> - A string parsed as a json object.
                <p style="color:#FF0000;font-size: 12px">(DEFAULT: "")</p>
                Example:-
                <p><i>var data = '{"name":"Root","children":[{"name":"Option1"},{"name":"Option1","children":[{"name":"Option1.1","children":[{"name":"Option1.1.1","href":"#"},{"name":"Option1.1.2","href":"#"},{"name":"Option1.1.3","href":"#"}]},{"name":"Option1.2","children":[{"name":"Option1.2.1","href":"#"},{"name":"Option1.2.2","href":"#"},{"name":"Option1.2.3","href":"#"},{"name":"Option1.2.4","href":"#"}]},{"name":"Option1.3"}]}]}';</i></p>
                <p><i>var json = JSON.parse(data);</i></p>
           </li>

           <li> <b>rootElement</b>: The root element of the Json Object <p style="color:#FF0000;font-size: 12px">(Default: "Root")</p></li>
           <li> <b>alignChild</b>: A CSS class to vertically align the parent-child elements(Recommended)
                <br><p>-Example:-
                    <i><br>.alignChild{
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;top: 0px !important;
                    <br>}</i></p>
           </li>
           <li> <b>menu_id</b>: An ID generator text for all your nested &lt;ul&gt;<p style="color:#FF0000;font-size: 12px">(Default: "main_menu")</p></li>
           <li> <b>position</b>: JQUERY Option to set the position of the child element. Use alignChild class instead.</li>
           <li> <b>cssUL</b>: A list of inline styles to be applied to the &lt;ul&gt; element
              <p style="color:#FF0000;font-size: 12px">(Default: {"font-family":'Helvetica,sans-serif',"font-size":"12px","width": "250px","background-color": "#F5F5F5"} )</p>
           </li>
           <li> <b>cssLI</b>:  A list of inline styles to be applied to the &lt;li&gt; element
              <p style="color:#FF0000;font-size: 12px">(Default: {"background-color": "#F5F5F5","border-bottom": "1px solid #CCCCCC"})</p>
           </li>
           <li> <b>cssLink</b>: A list of inline styles to be applied to the &lt;a&gt; element - the child of &lt;li&gt;
              <p style="color:#FF0000;font-size: 12px">(Default: {"font-size":"12px"} )</p>
           </li>
           <li> <b>cssLIHoverClass</b>: CSS class for the li:hover <p style="color:#FF0000;font-size: 12px">(Default: hoverClass)</p>
              <br>-Example:-
                    <br><i>.hoverClass{
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;background: none !important;
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: #890004 !important;
                    <br>}</i>
           </li>
           <li> <b>cssLINKHoverClass</b>: CSS class for a:hover <p style="color:#FF0000;font-size: 12px">(Default: hoverClassLink)</p>
              <br>-Example:-
                    <br><i>.hoverClassLink{
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;color: #FFFFFF !important;
                    <br>}</i>
           </li>
           <li> <b>createItem</b>: A recursive function to parse the Json object and create the Cascading Vertical Menu. Do not override this until you are absolutely sure.</li>
           <li> <b>Other Jquery Options - For more information go to <a href="http://api.jqueryui.com/menu/">http://api.jqueryui.com/menu</a>
                 Note: Do not use the "Menus" option since this list only works with &lt;ul&gt;&lt;li&gt;. <a href="http://api.jqueryui.com/menu/#option-menus">Check this out!</a>
           </li>
         </ul>
    </li>
</ol>
