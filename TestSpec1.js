export default function(spec){
	spec.describe('Test transition from repositories page to repository page', function(){
		spec.it('Test transition1', function(){
			await spec.exists('Repositories.Header.Body.Title');
			await spec.press('Repositories.Content.Button');
			await spec.notExists('Repositories.Header.Body.Title');
			await spec.exists('Repository.Header.Body.Title');
		});
	})
}