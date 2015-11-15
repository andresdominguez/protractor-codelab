describe('Empty test', function() {
  it('should contain bruce lee', function() {
    var nameList = [
        'Bruce Lee',
        'Jackie Chan'
    ];

    expect(nameList).toContain('Bruce Lee');
  });
});
