var frp_auction_translations;

(function() {
    tinymce.create('tinymce.plugins.FrpAuction', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) {

            if(frp_auction_translations){
                ed.addButton('frp_auction', {
                    title : frp_auction_translations.button_label,
                    cmd : 'frp_auction',
                    classes: 'frp_auction'
                    //image : url + '/../Images/frp_auction.png'
                });
                ed.addCommand('frp_auction', function() {
                    ed.execCommand('mceInsertContent', 0, '[frp_auction]');
                });
            }
        },

        /**
         * Creates control instances based in the incomming name. This method is normally not
         * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
         * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
         * method can be used to create those.
         *
         * @param {String} n Name of the control to create.
         * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
         * @return {tinymce.ui.Control} New control instance or null if no control was created.
         */
        createControl : function(n, cm) {
            return null;
        },

        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() {
            return {
                longname : 'Buttons for frp_auction',
                author : '!frappant',
                authorurl : 'https://frappant.ch/',
                infourl : 'https://frappant.ch',
                version : '1.0'
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add( 'frp_auction', tinymce.plugins.FrpEditProfile );

})();
