export default function(spec){
	spec.describe('Test transition from followings page to following page', function(){
		spec.it('Test transition3', function(){
			await spec.exists('Following.Header.Body.Title');
			await spec.press('Following.Content.Body.Button');
			await spec.notExists('Following.Header.Body.Title');
			await spec.exists('FProfile.Header.Body.Title');
		});
	})

}