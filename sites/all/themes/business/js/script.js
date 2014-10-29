jQuery(document).ready(function () {
    jQuery('.about-us-title').wrap('<a href="o-nama"></a>');
    jQuery('.certificates-title').wrap('<a href="sertifikati"></a>');
    jQuery('.field-item').addClass('image-inline');
    jQuery('.sb-image.sb-gallery.sb-gallery-gallery').addClass('image-inline');
    jQuery('#block-quicktabs-o-nama- h2').hide();

    var maxHeightRef = 0;
    var maxWidthRef = 0;
    var referenceTitle =jQuery('.reference-title');
    referenceTitle.each(function (index, value){
        var item = jQuery(this);
        if(item.height()>maxHeightRef)
            maxHeightRef=item.height();
        if(item.width()>maxWidthRef)
            maxWidthRef=item.width();
    });
    referenceTitle.height(maxHeightRef).width(maxWidthRef);
    var maxHeightRowRef = 0;
    var maxWidthRowRef = 0;
var certificateRow =jQuery('.certificate-row');
    certificateRow.each(function (index, value){
        var item = jQuery(this);
        if(item.height()>maxHeightRowRef)
            maxHeightRowRef=item.height();
        if(item.width()>maxWidthRowRef)
            maxWidthRowRef=item.width();
    });
    certificateRow.height(maxHeightRef).width(maxWidthRef);

});