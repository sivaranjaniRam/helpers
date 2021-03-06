app = {
	checkForUpdate: function(){
		if (window.applicationCache != undefined && window.applicationCache != null){
			window.applicationCache.addEventListener('updateready', this.updateApplication);
		}
	},
	updateApplication: function(event){
		if (window.applicationCache.status != 4) return;
		window.applicationCache.removeEventListener('updateready', this.updateApplication);
		window.applicationCache.swapCache();
		window.location.reload();
	}
}

app.checkForUpdate();