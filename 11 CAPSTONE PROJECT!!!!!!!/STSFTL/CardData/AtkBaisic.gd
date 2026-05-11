#Template for a baisic attack card, copy the entire .tscn file to make an different one


class_name Card_Offense extends Node2D
#taken from https://www.youtube.com/watch?v=HF8A0OuyHho&list=PLcDZ15ZHgyZdfrDfFX5dHXzsz5S5a1a_r&index=1
@export var CardName: String = "Attack"
@export var CardDescription: String = "Deal 10 Damage to the enemy, base cost: 1 energy"
@export var CardCost: int = 1
@export var CardImage: Node2D
@export var CardDamage: int = 10

#Labels handling
@onready var CardNameLbl: Label = $CardName/CardName
@onready var CardDescLbl: Label = $CardDescription

func CardPlayed():
	if Input.is_action_just_pressed("Card1played"):
		print("CARD 1 (ATK_CARD_BAISIC) PLAYED")
	#Detects when a card is played or not

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	CardNameLbl.set_text(CardName)
	CardDescLbl.set_text(CardDescription)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	CardPlayed()
