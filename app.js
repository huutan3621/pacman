document.addEventListener('DOMContentLoaded', () => {

    const scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    const grid = document.querySelector('.grid')
    const layout = [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]
    // 0 - pac dot
    // 1 - Tuong
    // 2 - Ma
    // 3 - Power
    // 4 - Rong
  
    const squares = []
  
    //tao bang
    function BoardCreate() {
      for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
  
        //them layout vao bang
        if(layout[i] === 0) {
          squares[i].classList.add('pacdot')
        } else if (layout[i] === 1) {
          squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
          squares[i].classList.add('ghostl')
        } else if (layout[i] === 3) {
          squares[i].classList.add('powerup')
        }
      }
    }
    BoardCreate()
  
  
    //Tao nhan vat
    //tao pacman vao bang
    let CurrentIndexPacman = 490
    squares[CurrentIndexPacman].classList.add('pacman')
    //tao do pacman vao luoi su dung toa do X va Y
    // function getCoordinates(index) {
    //   return [index % width, Math.floor(index / width)]
    // }
  
    // console.log(getCoordinates(CurrentIndexPacman))
  
    // pacman di chuyen
    function PacmanMove(e) {
      squares[CurrentIndexPacman].classList.remove('pacman')
      switch(e.keyCode) {
        case 37:
          if(
            CurrentIndexPacman % width !== 0 &&
            !squares[CurrentIndexPacman -1].classList.contains('wall') &&
            !squares[CurrentIndexPacman -1].classList.contains('ghostl')
            )
          CurrentIndexPacman -= 1
          if (squares[CurrentIndexPacman -1] === squares[363]) {
            CurrentIndexPacman = 391
          }
          break
        case 38:
          if(
            CurrentIndexPacman - width >= 0 &&
            !squares[CurrentIndexPacman -width].classList.contains('wall') &&
            !squares[CurrentIndexPacman -width].classList.contains('ghostl')
            ) 
          CurrentIndexPacman -= width
          break
        case 39:
          if(
            CurrentIndexPacman % width < width - 1 &&
            !squares[CurrentIndexPacman +1].classList.contains('wall') &&
            !squares[CurrentIndexPacman +1].classList.contains('ghostl')
          )
          CurrentIndexPacman += 1
          if (squares[CurrentIndexPacman +1] === squares[392]) {
            CurrentIndexPacman = 364
          }
          break
        case 40:
          if (
            CurrentIndexPacman + width < width * width &&
            !squares[CurrentIndexPacman +width].classList.contains('wall') &&
            !squares[CurrentIndexPacman +width].classList.contains('ghostl')
          )
          CurrentIndexPacman += width
          break
      }
      squares[CurrentIndexPacman].classList.add('pacman')
      EatDotPacman()
      EatPowerPacman()
      GameOverChecked()
      WinChecked()
    }
    document.addEventListener('keyup', PacmanMove)
  
    // Tao su kien khi pacman an vao pac dot
    function EatDotPacman() {
      if (squares[CurrentIndexPacman].classList.contains('pacdot')) {
        score++
        scoreDisplay.innerHTML = score
        squares[CurrentIndexPacman].classList.remove('pacdot')
      }
    }
  
    // Tap su kien khi pacman an vao power up
    function EatPowerPacman() {
      if (squares[CurrentIndexPacman].classList.contains('powerup')) {
        score +=10
        ghosts.forEach(ghost => ghost.currentScared = true)
        setTimeout(NormalGhost, 10000)
        squares[CurrentIndexPacman].classList.remove('powerup')
      }
    }
  
    // Ma binh thuong
    function NormalGhost() {
      ghosts.forEach(ghost => ghost.currentScared = false)
    }
  
    // Tao nhung con Ma su dung Constructors
    class Ghost {
      constructor(nClass, startI, speed) {
        this.nClass = nClass
        this.startI = startI
        this.speed = speed
        this.currentI = startI
        this.currentScared = false
        this.timerId = NaN
      }
    }
  
    // Tao Ma moi
    ghosts = [
      new Ghost('a', 348, 250),
      new Ghost('b', 376, 400),
      new Ghost('c', 351, 300),
      new Ghost('d', 379, 500)
      ]
  
    // Them Ma vao luoi
    ghosts.forEach(ghost => {
      squares[ghost.currentI].classList.add(ghost.nClass)
      squares[ghost.currentI].classList.add('ghost')
      })
  
    // Ma di chuyen ngau nhien
    ghosts.forEach(ghost => GhostMove(ghost))
  
    function GhostMove(ghost) {
      const directions =  [-1, +1, width, -width]
      let direction = directions[Math.floor(Math.random() * directions.length)]
  
      ghost.timerId = setInterval(function() {
        // Neu nhu Ma di vao cho trong khong co con Ma nao
        if  (!squares[ghost.currentI + direction].classList.contains('ghost') &&
          !squares[ghost.currentI + direction].classList.contains('wall') ) {
            //loai bo ghost class
            squares[ghost.currentI].classList.remove(ghost.nClass)
            squares[ghost.currentI].classList.remove('ghost', 'ghostscared')
            //di chuyen vao cho trong
            ghost.currentI += direction
            squares[ghost.currentI].classList.add(ghost.nClass, 'ghost')
        // ma tim duong di khac
        } else direction = directions[Math.floor(Math.random() * directions.length)]
  
        // Neu ma dang so hai thi
        if (ghost.currentScared) {
          squares[ghost.currentI].classList.add('ghostscared')
        }
  
        // Neu nhung con Ma dang so hai va pacman dang o gan
        if(ghost.currentScared && squares[ghost.currentI].classList.contains('pacman')) {
          squares[ghost.currentI].classList.remove(ghost.nClass, 'ghost', 'ghostscared')
          ghost.currentI = ghost.startI
          score +=100
          squares[ghost.currentI].classList.add(ghost.nClass, 'ghost')
        }
      GameOverChecked()
      }, ghost.speed)
    }
  
    //Thua
    function GameOverChecked() {
      if (squares[CurrentIndexPacman].classList.contains('ghost') &&
        !squares[CurrentIndexPacman].classList.contains('ghostscared')) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', PacmanMove)
        setTimeout(function(){ alert("Game Over"); }, 500)
      }
    }
  
    //Thang
    function WinChecked() {
      if (score === 274) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', PacmanMove)
        setTimeout(function(){ alert("SUCCESS"); }, 500)
      }
    }
  })
  