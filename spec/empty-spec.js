describe('Empty test', function() {
  it('should compare two numbers', function() {
    var nameList = [
        'Bruce Lee',
        'Jackie Chan'
    ];

    expect(nameList).toContain('Bruce Lee');
  });
});
