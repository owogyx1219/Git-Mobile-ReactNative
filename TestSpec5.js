export default function(spec){
	spec.describe('Test transition from following page to following page', function(){
		spec.it('Test transition5', function(){
			await spec.exists('FProfile.Header.Body.Title');
			await spec.press('FProfile.Header.Left.Button');
			await spec.notExists('FProfile.Header.Body.Title');
			await spec.exists('Followings.Header.Body.Title');
		});
	})

}