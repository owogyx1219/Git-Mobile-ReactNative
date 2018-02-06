export default function(spec){
	spec.describe('Test transition from followers page to follower page', function(){
		spec.it('Test transition2', function(){
			await spec.exists('Followers.Header.Body.Title');
			await spec.press('Followers.Content.Body.Button');
			await spec.notExists('Followers.Header.Body.Title');
			await spec.exists('FProfile.Header.Body.Title');
		});
	})

}