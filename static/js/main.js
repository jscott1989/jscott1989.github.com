$(function() {
	if (!Modernizr.touch){
		// Only use hover if we're not on a touch device
		$('img.hoverable').each(function() {
			var $this = $(this);
			var hover_src = $this.attr('src');
			var original_src = $this.data('original-src');
			$this.attr('src', original_src);
			$this.data('original-src', hover_src);

			$this.hover(function() {
				$this.attr('src', hover_src);
			}, function() {
				$this.attr('src', original_src);
			});
		});
	}
});