import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Признаки равенства треугольников',
    subtitle: 'Геометрия для 7 класса',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">
            Признаки равенства треугольников
          </h1>
          <p className="text-2xl text-muted-foreground">Геометрия • 7 класс</p>
        </div>
        <div className="text-8xl animate-scale-in">📐</div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Зачем изучать равенство треугольников?',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Зачем изучать равенство треугольников?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 bg-blue-50 border-none animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🏗️</div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Строительство и архитектура</h3>
                <p className="text-lg text-muted-foreground">
                  Проверка правильности конструкций и симметрии зданий
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-8 bg-purple-50 border-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🎨</div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Дизайн и искусство</h3>
                <p className="text-lg text-muted-foreground">
                  Создание симметричных узоров и композиций
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-8 bg-orange-50 border-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🔬</div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Наука и исследования</h3>
                <p className="text-lg text-muted-foreground">
                  Анализ структур молекул и кристаллов
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-8 bg-green-50 border-none animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Логическое мышление</h3>
                <p className="text-lg text-muted-foreground">
                  Развитие навыков доказательства и рассуждений
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Что значит «равные треугольники»?',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Что значит «равные треугольники»?
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
          <div className="flex-1">
            <Card className="p-12 bg-gradient-to-br from-blue-50 to-purple-50 border-4 border-primary">
              <svg viewBox="0 0 300 260" className="w-full">
                <polygon points="150,20 50,220 250,220" fill="#0EA5E9" opacity="0.3" stroke="#0EA5E9" strokeWidth="4"/>
                <text x="150" y="15" textAnchor="middle" fill="#0EA5E9" fontSize="24" fontWeight="bold">A</text>
                <text x="40" y="240" textAnchor="middle" fill="#0EA5E9" fontSize="24" fontWeight="bold">B</text>
                <text x="260" y="240" textAnchor="middle" fill="#0EA5E9" fontSize="24" fontWeight="bold">C</text>
              </svg>
            </Card>
          </div>
          <div className="text-6xl font-bold text-primary">≡</div>
          <div className="flex-1">
            <Card className="p-12 bg-gradient-to-br from-orange-50 to-red-50 border-4 border-accent">
              <svg viewBox="0 0 300 260" className="w-full">
                <polygon points="150,20 50,220 250,220" fill="#F97316" opacity="0.3" stroke="#F97316" strokeWidth="4"/>
                <text x="150" y="15" textAnchor="middle" fill="#F97316" fontSize="24" fontWeight="bold">A₁</text>
                <text x="40" y="240" textAnchor="middle" fill="#F97316" fontSize="24" fontWeight="bold">B₁</text>
                <text x="260" y="240" textAnchor="middle" fill="#F97316" fontSize="24" fontWeight="bold">C₁</text>
              </svg>
            </Card>
          </div>
        </div>
        <Card className="p-8 bg-yellow-50 border-l-4 border-yellow-400">
          <p className="text-xl leading-relaxed">
            <strong className="text-2xl">Треугольники равны</strong>, если при наложении они полностью совпадают.
            Это означает, что равны все их стороны и все углы:
            <br />
            <span className="text-primary font-semibold text-2xl block mt-4">
              AB = A₁B₁, BC = B₁C₁, AC = A₁C₁
            </span>
            <span className="text-secondary font-semibold text-2xl block mt-2">
              ∠A = ∠A₁, ∠B = ∠B₁, ∠C = ∠C₁
            </span>
          </p>
        </Card>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Первый признак равенства',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Первый признак равенства
        </h2>
        <Card className="p-8 bg-gradient-to-br from-blue-100 to-blue-50 border-4 border-primary">
          <h3 className="text-3xl font-bold mb-6 text-center">По двум сторонам и углу между ними</h3>
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 400 300" className="w-full max-w-2xl">
              <polygon points="200,40 80,240 320,240" fill="#0EA5E9" opacity="0.2" stroke="#0EA5E9" strokeWidth="4"/>
              
              <line x1="200" y1="40" x2="80" y2="240" stroke="#F97316" strokeWidth="6"/>
              <line x1="200" y1="40" x2="320" y2="240" stroke="#F97316" strokeWidth="6"/>
              
              <path d="M 200 70 Q 180 90 160 90" stroke="#8B5CF6" fill="none" strokeWidth="4"/>
              
              <circle cx="200" cy="40" r="8" fill="#F97316"/>
              <circle cx="80" cy="240" r="8" fill="#0EA5E9"/>
              <circle cx="320" cy="240" r="8" fill="#0EA5E9"/>
              
              <text x="200" y="25" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#0EA5E9">A</text>
              <text x="60" y="260" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#0EA5E9">B</text>
              <text x="340" y="260" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#0EA5E9">C</text>
              
              <text x="130" y="130" fontSize="24" fontWeight="bold" fill="#F97316">AB</text>
              <text x="270" y="130" fontSize="24" fontWeight="bold" fill="#F97316">AC</text>
              <text x="150" y="80" fontSize="24" fontWeight="bold" fill="#8B5CF6">∠A</text>
            </svg>
          </div>
        </Card>
        <Card className="p-8 bg-orange-50 border-l-8 border-accent">
          <p className="text-2xl leading-relaxed">
            Если <strong className="text-accent">две стороны</strong> и <strong className="text-secondary">угол между ними</strong> одного треугольника
            соответственно равны двум сторонам и углу между ними другого треугольника,
            то такие треугольники <strong className="text-primary">равны</strong>.
          </p>
        </Card>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Пример применения первого признака',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Пример: Первый признак
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-blue-50">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">Дано:</h3>
            <div className="space-y-4 text-xl">
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold text-2xl">→</span>
                <span>AB = 5 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold text-2xl">→</span>
                <span>AC = 7 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-secondary font-bold text-2xl">→</span>
                <span>∠A = 60°</span>
              </div>
              <div className="border-t-2 border-primary my-4"></div>
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold text-2xl">→</span>
                <span>A₁B₁ = 5 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold text-2xl">→</span>
                <span>A₁C₁ = 7 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-secondary font-bold text-2xl">→</span>
                <span>∠A₁ = 60°</span>
              </div>
            </div>
          </Card>
          <Card className="p-8 bg-green-50">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">Решение:</h3>
            <div className="space-y-6 text-xl">
              <div className="p-4 bg-white rounded-lg border-2 border-accent">
                <p className="font-semibold mb-2">Шаг 1:</p>
                <p>Сравниваем стороны: AB = A₁B₁ = 5 см ✓</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-accent">
                <p className="font-semibold mb-2">Шаг 2:</p>
                <p>Сравниваем стороны: AC = A₁C₁ = 7 см ✓</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-secondary">
                <p className="font-semibold mb-2">Шаг 3:</p>
                <p>Сравниваем углы: ∠A = ∠A₁ = 60° ✓</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-center text-2xl font-bold">
                △ABC ≡ △A₁B₁C₁
              </div>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Второй признак равенства',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Второй признак равенства
        </h2>
        <Card className="p-8 bg-gradient-to-br from-purple-100 to-purple-50 border-4 border-secondary">
          <h3 className="text-3xl font-bold mb-6 text-center">По стороне и двум прилежащим углам</h3>
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 400 300" className="w-full max-w-2xl">
              <polygon points="200,40 80,240 320,240" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="4"/>
              
              <line x1="80" y1="240" x2="320" y2="240" stroke="#F97316" strokeWidth="6"/>
              
              <path d="M 110 240 Q 120 220 130 215" stroke="#0EA5E9" fill="none" strokeWidth="4"/>
              <path d="M 290 240 Q 280 220 270 215" stroke="#0EA5E9" fill="none" strokeWidth="4"/>
              
              <circle cx="200" cy="40" r="8" fill="#8B5CF6"/>
              <circle cx="80" cy="240" r="8" fill="#F97316"/>
              <circle cx="320" cy="240" r="8" fill="#F97316"/>
              
              <text x="200" y="25" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#8B5CF6">A</text>
              <text x="60" y="260" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#8B5CF6">B</text>
              <text x="340" y="260" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#8B5CF6">C</text>
              
              <text x="200" y="270" fontSize="24" fontWeight="bold" fill="#F97316">BC</text>
              <text x="110" y="210" fontSize="24" fontWeight="bold" fill="#0EA5E9">∠B</text>
              <text x="280" y="210" fontSize="24" fontWeight="bold" fill="#0EA5E9">∠C</text>
            </svg>
          </div>
        </Card>
        <Card className="p-8 bg-orange-50 border-l-8 border-accent">
          <p className="text-2xl leading-relaxed">
            Если <strong className="text-accent">сторона</strong> и <strong className="text-primary">два прилежащих к ней угла</strong> одного треугольника
            соответственно равны стороне и двум прилежащим к ней углам другого треугольника,
            то такие треугольники <strong className="text-secondary">равны</strong>.
          </p>
        </Card>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Пример применения второго признака',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Пример: Второй признак
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-purple-50">
            <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Дано:</h3>
            <div className="space-y-4 text-xl">
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold text-2xl">→</span>
                <span>BC = 8 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold text-2xl">→</span>
                <span>∠B = 45°</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold text-2xl">→</span>
                <span>∠C = 70°</span>
              </div>
              <div className="border-t-2 border-secondary my-4"></div>
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold text-2xl">→</span>
                <span>B₁C₁ = 8 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold text-2xl">→</span>
                <span>∠B₁ = 45°</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold text-2xl">→</span>
                <span>∠C₁ = 70°</span>
              </div>
            </div>
          </Card>
          <Card className="p-8 bg-green-50">
            <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Решение:</h3>
            <div className="space-y-6 text-xl">
              <div className="p-4 bg-white rounded-lg border-2 border-accent">
                <p className="font-semibold mb-2">Шаг 1:</p>
                <p>Сравниваем стороны: BC = B₁C₁ = 8 см ✓</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-primary">
                <p className="font-semibold mb-2">Шаг 2:</p>
                <p>Сравниваем углы: ∠B = ∠B₁ = 45° ✓</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-primary">
                <p className="font-semibold mb-2">Шаг 3:</p>
                <p>Сравниваем углы: ∠C = ∠C₁ = 70° ✓</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-secondary to-accent text-white rounded-lg text-center text-2xl font-bold">
                △ABC ≡ △A₁B₁C₁
              </div>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Третий признак равенства',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Третий признак равенства
        </h2>
        <Card className="p-8 bg-gradient-to-br from-orange-100 to-orange-50 border-4 border-accent">
          <h3 className="text-3xl font-bold mb-6 text-center">По трём сторонам</h3>
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 400 300" className="w-full max-w-2xl">
              <polygon points="200,40 80,240 320,240" fill="#F97316" opacity="0.2" stroke="#F97316" strokeWidth="4"/>
              
              <line x1="200" y1="40" x2="80" y2="240" stroke="#0EA5E9" strokeWidth="6"/>
              <line x1="200" y1="40" x2="320" y2="240" stroke="#8B5CF6" strokeWidth="6"/>
              <line x1="80" y1="240" x2="320" y2="240" stroke="#F97316" strokeWidth="6"/>
              
              <circle cx="200" cy="40" r="8" fill="#F97316"/>
              <circle cx="80" cy="240" r="8" fill="#F97316"/>
              <circle cx="320" cy="240" r="8" fill="#F97316"/>
              
              <text x="200" y="25" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#F97316">A</text>
              <text x="60" y="260" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#F97316">B</text>
              <text x="340" y="260" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#F97316">C</text>
              
              <text x="120" y="130" fontSize="24" fontWeight="bold" fill="#0EA5E9">AB</text>
              <text x="280" y="130" fontSize="24" fontWeight="bold" fill="#8B5CF6">AC</text>
              <text x="200" y="270" fontSize="24" fontWeight="bold" fill="#F97316">BC</text>
            </svg>
          </div>
        </Card>
        <Card className="p-8 bg-orange-50 border-l-8 border-accent">
          <p className="text-2xl leading-relaxed">
            Если <strong className="text-primary">три стороны</strong> одного треугольника
            соответственно равны трём сторонам другого треугольника,
            то такие треугольники <strong className="text-accent">равны</strong>.
          </p>
        </Card>
        <Card className="p-6 bg-yellow-50 border-2 border-yellow-400">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">💡</div>
            <p className="text-lg">
              <strong>Важно:</strong> Это самый простой признак для проверки — достаточно измерить только стороны!
            </p>
          </div>
        </Card>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Пример применения третьего признака',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Пример: Третий признак
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-orange-50">
            <h3 className="text-2xl font-bold mb-6 text-center text-accent">Дано:</h3>
            <div className="space-y-4 text-xl">
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold text-2xl">→</span>
                <span>AB = 6 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-secondary font-bold text-2xl">→</span>
                <span>BC = 8 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold text-2xl">→</span>
                <span>AC = 10 см</span>
              </div>
              <div className="border-t-2 border-accent my-4"></div>
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold text-2xl">→</span>
                <span>A₁B₁ = 6 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-secondary font-bold text-2xl">→</span>
                <span>B₁C₁ = 8 см</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold text-2xl">→</span>
                <span>A₁C₁ = 10 см</span>
              </div>
            </div>
          </Card>
          <Card className="p-8 bg-green-50">
            <h3 className="text-2xl font-bold mb-6 text-center text-accent">Решение:</h3>
            <div className="space-y-6 text-xl">
              <div className="p-4 bg-white rounded-lg border-2 border-primary">
                <p className="font-semibold mb-2">Шаг 1:</p>
                <p>AB = A₁B₁ = 6 см ✓</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-secondary">
                <p className="font-semibold mb-2">Шаг 2:</p>
                <p>BC = B₁C₁ = 8 см ✓</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-accent">
                <p className="font-semibold mb-2">Шаг 3:</p>
                <p>AC = A₁C₁ = 10 см ✓</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-accent to-primary text-white rounded-lg text-center text-2xl font-bold">
                △ABC ≡ △A₁B₁C₁
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                <p className="text-sm">
                  <strong>Интересно:</strong> Это прямоугольный треугольник (6² + 8² = 10²)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Как выбирать признак?',
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Как выбирать признак?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 bg-gradient-to-br from-blue-100 to-blue-50 border-4 border-primary hover:scale-105 transition-transform">
            <div className="text-center space-y-4">
              <div className="text-6xl">1️⃣</div>
              <h3 className="text-2xl font-bold text-primary">Первый признак</h3>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold mb-2">Используй, если знаешь:</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">●</span>
                    <span>2 стороны</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-secondary">●</span>
                    <span>Угол МЕЖДУ ними</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-purple-100 to-purple-50 border-4 border-secondary hover:scale-105 transition-transform">
            <div className="text-center space-y-4">
              <div className="text-6xl">2️⃣</div>
              <h3 className="text-2xl font-bold text-secondary">Второй признак</h3>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold mb-2">Используй, если знаешь:</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <span className="text-accent">●</span>
                    <span>1 сторону</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">●</span>
                    <span>2 угла у этой стороны</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-orange-100 to-orange-50 border-4 border-accent hover:scale-105 transition-transform">
            <div className="text-center space-y-4">
              <div className="text-6xl">3️⃣</div>
              <h3 className="text-2xl font-bold text-accent">Третий признак</h3>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold mb-2">Используй, если знаешь:</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">●</span>
                    <span>Все 3 стороны</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-600">●</span>
                    <span>Самый простой!</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 bg-gradient-to-r from-primary via-secondary to-accent text-white">
          <h3 className="text-3xl font-bold mb-4 text-center">🎯 Алгоритм решения задач</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
              <div className="text-4xl mb-2">📝</div>
              <p className="font-semibold">Выпиши все данные</p>
            </div>
            <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
              <div className="text-4xl mb-2">🔍</div>
              <p className="font-semibold">Найди равные элементы</p>
            </div>
            <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
              <div className="text-4xl mb-2">✨</div>
              <p className="font-semibold">Выбери подходящий признак</p>
            </div>
            <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
              <div className="text-4xl mb-2">✅</div>
              <p className="font-semibold">Сделай вывод</p>
            </div>
          </div>
        </Card>
      </div>
    ),
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [currentSlide]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 ${
      isFullscreen ? 'fixed inset-0 z-50 flex items-center justify-center' : ''
    }`}>
      <div className={isFullscreen ? 'w-full h-full flex flex-col' : 'container mx-auto px-4 py-8 max-w-7xl'}>
        <div className={isFullscreen ? 'px-8 py-4' : 'mb-6'}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-muted-foreground">
              Слайд {currentSlide + 1} из {slides.length}
            </h3>
            <div className="flex items-center space-x-4">
              <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
              <Button
                onClick={toggleFullscreen}
                size="sm"
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Icon name={isFullscreen ? 'Minimize2' : 'Maximize2'} size={18} />
                <span>{isFullscreen ? 'Выход' : 'Полный экран'}</span>
              </Button>
            </div>
          </div>
        </div>

        <Card className={`p-8 md:p-12 animate-fade-in shadow-2xl ${
          isFullscreen ? 'flex-1 mx-8 aspect-video flex items-center justify-center' : 'min-h-[600px]'
        }`}>
          <div key={currentSlide} className="animate-scale-in">
            {slides[currentSlide].content}
          </div>
        </Card>

        <div className={`flex items-center justify-between ${
          isFullscreen ? 'px-8 py-4' : 'mt-8'
        }`}>
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            size="lg"
            variant="outline"
            className="text-lg"
          >
            <Icon name="ChevronLeft" className="mr-2" size={24} />
            Назад
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            size="lg"
            className="text-lg"
          >
            Вперёд
            <Icon name="ChevronRight" className="ml-2" size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}