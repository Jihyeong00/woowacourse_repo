### 1. MVC에 대한 명확한 정의가 있으면 좋겠습니다.
> #### Model
>어플리케이션이 무엇을 할 지 정의하는 부분입니다. 조회된 결과 값을 담기위한 Class를 뜻합니다.
>
> #### View
> 사용자에게 시각적으로 보여지는 부분입니다. (입, 출력 부분을 표시합니다.) 자바스크립트에서는 Html을 사용하지 않고는 화면을 보여줄 수 가 없습니다. 따라서 Console 부분을 View라고 정의합니다. 
>
> #### Controller
> CRUD를 담당합니다. 원래 Controller는 DB까지 접근하는 역할을 하지만 DB가 없으므로 각 클래스로 선언된 변수들을 사용하고 처리하는데 사용합니다.
>
> #### Service
> -> 삭제합니다. Controller에 대한 이해부족

<br>

---

<br>

### 2. 상수 값을 함수로 관리하면 안될 것 같습니다.
```javascript
END_GAME: (winnerName) => `최종 우승자 : ${winnerName}`
```
해당 상수에서 ``winnerName`` 변수에 따라 값이 바뀝니다. 이건 상수의 개념에서 어긋난다고 생각이 듭니다. 따라서 ``최종 우승자 : `` 해당 부분만 상수로 빼주면 좋을 것 같습니다.

<br>

---

<br>

### 3. 생성자에서는 ```set``` 메소드를 호출하지 않습니다. ```this```를 사용합니다.
```constructor```는 인스턴스를 생성 및 초기화하는 기능을 가진 특수 메서드입니다. ```set``` 메소드는 private한 필드의 값에 접근하기 위해 사용하는 것이다보니 생성자 메소드에서는 ```this```를 사용하는 것이 약속과 같이 사용되는 것 같습빈다.

<br>

---

<br>


### 4. 메소드 네이밍의 신경을 쓰면 좋을 것 같습니다.
```Cars[]```를 반환해주는 메소드의 이름이 ```setRacingCars()```입니다. 이 메소드명은 ```set```을 해주는 것인지 자동차들을 ```get```하는 것인지 헷갈립니다. ```getRacingCars()``` 으로 바꿔주는 것이 좋을 것 같습니다.

<br>

---

<br>

### 5.불필요한 키워드는 지우는 게 좋을 것 같습니다.
```javascript
export const checkNumber = async (number) => {
    if (isNaN(number)) throw new Error(RACING.NUMBER_ERROR)
    if (number <= 0) throw new Error(RACING.NUMBER_ERROR)
}

export const checkName = async (nameArray) => {
    nameArray.forEach(name => {
        if (name.length > 5 || name.trim() === 0) throw new Error(RACING.NAMING_ERROR)
        if (nameArray.filter(value => name === value).length >= 2) throw new Error(RACING.NAMING_ERROR)
    })
}

```
async가 필요없는 동기적 코드에 사용이 되고있습니다. async 키워드를 지우는 것이 좋을 것 같습니다.

<br>

---

<br>

### 6. 입력을 받는 부분에서는 개행 문자를 넣어주는 것이 좋을 것 같습니다.
예시로 주어진 실행결과의 예시에는 출력이 일어나고 다음 줄에 사용자의 입력을 받고있습니다. 이러한 경우 개행문자인 ``\n``과 같이 줄바꿈을 해주는 것이 좋을 것 같습니다.

<br>

---

<br>

### 7. 기능분리를 좀 더 세부적으로 하면 좋을 것 같습니다.
```setRacingCars()```에서는 다음과 같은 일들을 하고 있습니다. [``이름 입력 받기``, ``이름 값 예외처리``, ``car 객체 생성``] 각 메소드마다 하나의 기능을 하고 있으면 좋을 것 같습니다.

### 8. 유효성 검사를 할 때 무엇을 체크하는지 알면 좋을 것 같습니다.
```javascript
export const checkNumber = async (number) => {
    if (isNaN(number)) throw new Error(RACING.NUMBER_ERROR)
    if (number <= 0) throw new Error(RACING.NUMBER_ERROR)
}
```
무슨 값을 체크하는지 어떤 것을 체크하는지 명시를 하고있으면 좋을 것 같습니다.

### 9. 범위 같이 변하지 않는 값들은 상수로 만드는 것이 좋을 것 같습니다.
```javascript
for (let i = 0; i < gameMoveCount; i++) {
    cars.forEach(car => {
        const isMove = MissionUtils.Random.pickNumberInRange(0, 9) >= 4
```
위의 코드에서 0과 9 그리고 판단하는 숫자의 값은 변하지 않습니다. 이를 상수로 만들면 좋을 것 같습니다.