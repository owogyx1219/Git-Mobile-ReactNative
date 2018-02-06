export default function(spec){
	spec.describe('Test transition from follower page to followers page', function(){
		spec.it('Test transition4', function(){
			await spec.exists('FProfile.Header.Body.Title');
			await spec.press('FProfile.Header.Left.Button');
			await spec.notExists('FProfile.Header.Body.Title');
			await spec.exists('Followers.Header.Body.Title');
		});
	})

}