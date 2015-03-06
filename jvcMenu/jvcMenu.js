(function ( $ ) {
    $.fn.jvcMenu = function( options ) {
        var counter=1;
        var settings = $.extend({
            json:'',//Json Object
            rootElement:'Root',
            alignChild:"alignChild", // A CSS CLASS to Vertically align parent-child <ul>
            menu_id:"main_menu",// Incremental ID of the ULs
            position: { my: "left", at: "right" },//JQUERY Option to set the position of the child element. Use alignChild as a class instead
            cssUL: {"font-family":'Helvetica,sans-serif',"font-size":"12px","width": "250px","background-color": "#F5F5F5"},// CSS for the <ul>
            cssLI: {"background-color": "#F5F5F5","border-bottom": "1px solid #CCCCCC"},//CSS for the <li>
            cssLink: {"font-size":"12px"},// CSS for the <a>
            cssLIHoverClass: "hoverClass",//CSS class for the li:hover
            cssLINKHoverClass: "hoverClassLink",//CSS class for the a:hover
            createItem: function ( obj,settings ) { //Recursive function to iterate over json
                            var $obj = null;
                            if (obj.name) {
                                    // it's an object, so create the <li> and <a>
                                    if (obj.name===undefined || obj.name=== null || obj.name == settings.rootElement){
                                        $obj = $('<li>');
                                        $obj.css(settings.cssLI);
                                    }else{
                                        $a = $('<a>')
                                        $a.css(settings.cssLink);
                                        $obj = $a.attr('href', obj.href).text(obj.name);
                                        $li = $('<li>');
                                        $li.css(settings.cssLI);
                                        $obj = $li.append($obj);
                                    }
                                    // if there are any children, append them recursively
                                    if (obj.children) {
                                            $obj.append(settings.createItem(obj.children,settings)); //RECURSIVE CALL TO INSERT CHILDREN under <li>
                                    }
                            }
                            else if (obj.length) {
                                    // it's an array with some elements, so create the <ul>
                                    $obj = $('<ul>');
                                    $obj.attr('id',settings.menu_id+'_'+counter);
                                    counter=counter+1;
                                    $obj.css(settings.cssUL)
                                    $obj.addClass('ui-main-menu');
                                    for (var i = 0, l = obj.length; i < l; i++) {
                                            $obj.append( settings.createItem( obj[i],settings ) );//RECURSIVE CALL TO INSERT CHILDREN under <ul>
                                    }
                            }
                            // if it was an empty array or an object that doesn't have a title
                            // property, then it'll just return null;
                            return $obj;
                        }
        }, options );
        var obj = settings.json;
        console.log(this.attr('id'));
        $objUL = settings.createItem(obj,settings);
        this.html($objUL.html());
        $( "#"+settings.menu_id+'_1' ).menu(options);
        this.css('display','block');
        this.find('li').each(function(){
            $(this).on('mouseover',function(event){//SET CSS CLASSES ACCORDING TO OPTIONS
                $(this).addClass(settings.cssLIHoverClass);
                $(this).find('a').first().addClass(settings.cssLINKHoverClass);
                $(this).find('ul').first().addClass(settings.alignChild);
            });
            $(this).on('mouseout',function(){
                $(this).removeClass(settings.cssLIHoverClass);
                $(this).find('a').first().removeClass(settings.cssLINKHoverClass);
            });
        });
    };
}( jQuery ));